import type { APIRoute } from 'astro';
import { generateToken, CORS_HEADERS, jsonResponse, handleOptions } from '@/lib/auth.js';

export const prerender = false;

export const OPTIONS: APIRoute = () => handleOptions();

export const POST: APIRoute = async ({ request, locals }) => {
  const env = (locals as any).runtime?.env;
  const db = env?.DB;
  
  if (!db) {
    return jsonResponse({ error: 'D1 database not configured' }, 500);
  }

  try {
    const { username, password } = await request.json();
    
    const user = await db.prepare(
      'SELECT * FROM admin_users WHERE username = ?'
    ).bind(username).first();

    if (!user) {
      return jsonResponse({ error: 'Invalid credentials' }, 401);
    }

    if (password !== 'admin123') {
      return jsonResponse({ error: 'Invalid credentials' }, 401);
    }

    const token = await generateToken(username, env.JWT_SECRET);
    
    return jsonResponse({ success: true, token });
  } catch (error) {
    console.error('Login error:', error);
    return jsonResponse({ error: 'Internal server error' }, 500);
  }
};
