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
      'SELECT * FROM services ORDER BY sort_order ASC'
    ).all();
    results.results.forEach((r: any) => {
      try { r.process = JSON.parse(r.process); } catch(e) { r.process = []; }
    });
    return jsonResponse(results.results);
  } catch (error: any) {
    console.error('Admin services error:', error);
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
    const process = Array.isArray(body.process) ? JSON.stringify(body.process) : '[]';
    const result = await db.prepare(
      'INSERT INTO services (title, slug, description, content, price_range, process, icon, sort_order) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    ).bind(
      body.title,
      body.slug,
      body.description || '',
      body.content || '',
      body.price_range || '',
      process,
      body.icon || 'Home',
      parseInt(body.sort_order) || 0
    ).run();
    return jsonResponse({ success: true, id: result.lastInsertRowid });
  } catch (error: any) {
    console.error('Admin services error:', error);
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
    const process = Array.isArray(body.process) ? JSON.stringify(body.process) : '[]';
    const result = await db.prepare(
      'UPDATE services SET title = ?, slug = ?, description = ?, content = ?, price_range = ?, process = ?, icon = ?, sort_order = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?'
    ).bind(
      body.title,
      body.slug,
      body.description || '',
      body.content || '',
      body.price_range || '',
      process,
      body.icon || 'Home',
      parseInt(body.sort_order) || 0,
      parseInt(body.id)
    ).run();
    return jsonResponse({ success: true, changes: result.changes });
  } catch (error: any) {
    console.error('Admin services error:', error);
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
    const result = await db.prepare(
      'DELETE FROM services WHERE id = ?'
    ).bind(id).run();
    return jsonResponse({ success: true, changes: result.changes });
  } catch (error: any) {
    console.error('Admin services error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
};
