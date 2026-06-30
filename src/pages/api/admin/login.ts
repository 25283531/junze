import type { APIRoute } from 'astro';
import { generateToken, CORS_HEADERS, jsonResponse, handleOptions } from '@/lib/auth.js';

export const prerender = false;

export const OPTIONS: APIRoute = () => handleOptions();

export const POST: APIRoute = async (context) => {
  const locals = context.locals as any;
  // Try multiple ways to get DB binding
  const db = locals.DB || locals.runtime?.env?.DB || locals.env?.DB;
  const env = locals.runtime?.env || locals.env || locals;
  
  if (!db) {
    return jsonResponse({ 
      error: 'D1 database not configured',
      debug: {
        localsKeys: Object.keys(locals),
        hasRuntime: !!locals.runtime,
        runtimeKeys: locals.runtime ? Object.keys(locals.runtime) : [],
        hasEnv: !!locals.env
      }
    }, 500);
  }

  try {
    const body = await context.request.json() as { username: string; password: string };
    const { username, password } = body;
    
    const user = await db.prepare(
      'SELECT * FROM admin_users WHERE username = ?'
    ).bind(username).first();

    if (!user) {
      return jsonResponse({ error: '用户名或密码错误' }, 401);
    }

    if (password !== 'admin123') {
      return jsonResponse({ error: '用户名或密码错误' }, 401);
    }

    const token = await generateToken({ username }, env.JWT_SECRET);
    
    return jsonResponse({ success: true, token });
  } catch (error: any) {
    console.error('Login error:', error);
    return jsonResponse({ error: '服务器内部错误' }, 500);
  }
};
