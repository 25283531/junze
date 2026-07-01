import type { APIRoute } from 'astro';
import { jsonResponse, handleOptions, checkAuth } from '@/lib/auth.js';

export const prerender = false;

export const OPTIONS: APIRoute = () => handleOptions();

export const GET: APIRoute = async ({ request, locals }) => {
  const env = locals as any;
  const authError = await checkAuth(request, env);
  if (authError) return authError;

  const db = env.DB;
  try {
    const results = await db.prepare(
      'SELECT * FROM service_update_categories ORDER BY sort_order ASC'
    ).all();
    return jsonResponse(results.results);
  } catch (error: any) {
    console.error('Admin categories error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
};

export const POST: APIRoute = async ({ request, locals }) => {
  const env = locals as any;
  const authError = await checkAuth(request, env);
  if (authError) return authError;

  const db = env.DB;
  try {
    const body = await request.json() as any;
    const result = await db.prepare(
      'INSERT INTO service_update_categories (name, sort_order) VALUES (?, ?)'
    ).bind(
      body.name,
      parseInt(body.sort_order) || 0
    ).run();
    return jsonResponse({ success: true, id: result.lastInsertRowid });
  } catch (error: any) {
    console.error('Admin categories error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
};

export const PUT: APIRoute = async ({ request, locals }) => {
  const env = locals as any;
  const authError = await checkAuth(request, env);
  if (authError) return authError;

  const db = env.DB;
  try {
    const body = await request.json() as any;
    const result = await db.prepare(
      'UPDATE service_update_categories SET name = ?, sort_order = ? WHERE id = ?'
    ).bind(
      body.name,
      parseInt(body.sort_order) || 0,
      parseInt(body.id)
    ).run();
    return jsonResponse({ success: true, changes: result.changes });
  } catch (error: any) {
    console.error('Admin categories error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
};

export const DELETE: APIRoute = async ({ request, locals }) => {
  const env = locals as any;
  const authError = await checkAuth(request, env);
  if (authError) return authError;

  const db = env.DB;
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    await db.prepare(
      'DELETE FROM service_updates WHERE category_id = ?'
    ).bind(id).run();
    const result = await db.prepare(
      'DELETE FROM service_update_categories WHERE id = ?'
    ).bind(id).run();
    return jsonResponse({ success: true, changes: result.changes });
  } catch (error: any) {
    console.error('Admin categories error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
};
