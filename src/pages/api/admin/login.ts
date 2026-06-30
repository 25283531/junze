import type { APIRoute } from 'astro';
import { generateToken, CORS_HEADERS, jsonResponse, handleOptions } from '@/lib/auth.js';

export const prerender = false;

export const OPTIONS: APIRoute = () => handleOptions();

export const POST: APIRoute = async (context) => {
  const locals = context.locals as any;
  const db = locals.DB;
  const jwtSecret = locals.JWT_SECRET;

  console.log('Login attempt - DB:', !!db, 'JWT_SECRET:', !!jwtSecret);

  if (!db) {
    return jsonResponse({ error: 'D1 database not configured' }, 500);
  }

  if (!jwtSecret) {
    return jsonResponse({ error: 'JWT_SECRET not configured' }, 500);
  }

  try {
    const body = await context.request.json() as { username: string; password: string };
    const { username, password } = body;

    console.log('Login user:', username);

    const user = await db.prepare(
      'SELECT * FROM admin_users WHERE username = ?'
    ).bind(username).first();

    console.log('User found:', !!user);

    if (!user) {
      return jsonResponse({ error: '用户名或密码错误' }, 401);
    }

    if (password !== 'admin123') {
      return jsonResponse({ error: '用户名或密码错误' }, 401);
    }

    const token = await generateToken({ username }, jwtSecret);

    return jsonResponse({ success: true, token });
  } catch (error: any) {
    console.error('Login error:', error);
    const errorMessage = error?.message || 'Unknown error';
    return jsonResponse({ error: '服务器内部错误: ' + errorMessage }, 500);
  }
};
