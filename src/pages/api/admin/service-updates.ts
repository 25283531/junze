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
      `SELECT su.*, suc.name as category_name
       FROM service_updates su
       LEFT JOIN service_update_categories suc ON su.category_id = suc.id
       ORDER BY su.publish_date DESC, su.sort_order ASC`
    ).all();
    return jsonResponse(results.results);
  } catch (error: any) {
    console.error('Admin updates error:', error);
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
      `INSERT INTO service_updates (category_id, title, content, image_key, community, publish_date, sort_order)
       VALUES (?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      body.category_id ? parseInt(body.category_id) : null,
      body.title,
      body.content || '',
      body.image_key || null,
      body.community || '',
      body.publish_date || '',
      parseInt(body.sort_order) || 0
    ).run();
    return jsonResponse({ success: true, id: result.lastInsertRowid });
  } catch (error: any) {
    console.error('Admin updates error:', error);
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
      `UPDATE service_updates
       SET category_id = ?, title = ?, content = ?, image_key = ?, community = ?, publish_date = ?, sort_order = ?, updated_at = CURRENT_TIMESTAMP
       WHERE id = ?`
    ).bind(
      body.category_id ? parseInt(body.category_id) : null,
      body.title,
      body.content || '',
      body.image_key || null,
      body.community || '',
      body.publish_date || '',
      parseInt(body.sort_order) || 0,
      parseInt(body.id)
    ).run();
    return jsonResponse({ success: true, changes: result.changes });
  } catch (error: any) {
    console.error('Admin updates error:', error);
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
      'DELETE FROM service_updates WHERE id = ?'
    ).bind(id).run();
    return jsonResponse({ success: true, changes: result.changes });
  } catch (error: any) {
    console.error('Admin updates error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
};
