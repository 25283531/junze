import type { APIRoute } from 'astro';
import { jsonResponse, handleOptions } from '@/lib/auth.js';

export const prerender = false;

export const OPTIONS: APIRoute = () => handleOptions();

export const GET: APIRoute = async ({ locals }) => {
  const env = locals as any;
  const db = env.DB;
  try {
    const results = await db.prepare(
      'SELECT * FROM service_update_categories ORDER BY sort_order ASC'
    ).all();
    return jsonResponse(results.results);
  } catch (error: any) {
    console.error('Categories error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
};
