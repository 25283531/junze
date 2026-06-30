import type { APIRoute } from 'astro';
import { jsonResponse, handleOptions, checkAuth } from '@/lib/auth.js';

export const prerender = false;

export const OPTIONS: APIRoute = () => handleOptions();

export const GET: APIRoute = async ({ request, locals }) => {
  const env = (locals as any).runtime?.env;
  const authError = await checkAuth(request, env);
  if (authError) return authError;

  const db = env.DB;
  try {
    const results = await db.prepare(
      'SELECT * FROM cases ORDER BY completion_date DESC'
    ).all();
    return jsonResponse(results.results);
  } catch (error: any) {
    console.error('Admin cases error:', error);
    return jsonResponse({ error: error.message || 'Internal server error' }, 500);
  }
};

export const POST: APIRoute = async ({ request, locals }) => {
  const env = (locals as any).runtime?.env;
  const authError = await checkAuth(request, env);
  if (authError) return authError;

  const db = env.DB;
  try {
    const body = await request.json() as any;
    const result = await db.prepare(
      'INSERT INTO cases (title, description, area, community, service_content, completion_date, review) VALUES (?, ?, ?, ?, ?, ?, ?)'
    ).bind(
      body.title,
      body.description,
      body.area,
      body.community,
      body.service_content,
      body.completion_date,
      body.review
    ).run();
    return jsonResponse({ success: true, id: result.lastInsertRowid });
  } catch (error: any) {
    console.error('Admin cases error:', error);
    return jsonResponse({ error: error.message || 'Internal server error' }, 500);
  }
};

export const PUT: APIRoute = async ({ request, locals }) => {
  const env = (locals as any).runtime?.env;
  const authError = await checkAuth(request, env);
  if (authError) return authError;

  const db = env.DB;
  try {
    const body = await request.json() as any;
    const result = await db.prepare(
      'UPDATE cases SET title = ?, description = ?, area = ?, community = ?, service_content = ?, completion_date = ?, review = ? WHERE id = ?'
    ).bind(
      body.title,
      body.description,
      body.area,
      body.community,
      body.service_content,
      body.completion_date,
      body.review,
      body.id
    ).run();
    return jsonResponse({ success: true, changes: result.changes });
  } catch (error: any) {
    console.error('Admin cases error:', error);
    return jsonResponse({ error: error.message || 'Internal server error' }, 500);
  }
};

export const DELETE: APIRoute = async ({ request, locals }) => {
  const env = (locals as any).runtime?.env;
  const authError = await checkAuth(request, env);
  if (authError) return authError;

  const db = env.DB;
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    const result = await db.prepare(
      'DELETE FROM cases WHERE id = ?'
    ).bind(id).run();
    return jsonResponse({ success: true, changes: result.changes });
  } catch (error: any) {
    console.error('Admin cases error:', error);
    return jsonResponse({ error: error.message || 'Internal server error' }, 500);
  }
};
