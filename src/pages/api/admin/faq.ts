import type { APIRoute } from 'astro';
import { CORS_HEADERS, jsonResponse, handleOptions, checkAuth } from '@/lib/auth.js';

export const prerender = false;

export const OPTIONS: APIRoute = () => handleOptions();

export const GET: APIRoute = async ({ request, locals }) => {
  const env = (locals as any).runtime?.env;
  const authError = await checkAuth(request, env);
  if (authError) return authError;

  const db = env.DB;
  try {
    const results = await db.prepare(
      'SELECT * FROM faq ORDER BY sort_order ASC'
    ).all();
    return jsonResponse(results.results);
  } catch (error) {
    console.error('Admin faq error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
};

export const POST: APIRoute = async ({ request, locals }) => {
  const env = (locals as any).runtime?.env;
  const authError = await checkAuth(request, env);
  if (authError) return authError;

  const db = env.DB;
  try {
    const body = await request.json();
    const result = await db.prepare(
      'INSERT INTO faq (question, answer, category, sort_order) VALUES (?, ?, ?, ?)'
    ).bind(
      body.question,
      body.answer,
      body.category,
      body.sort_order || 0
    ).run();
    return jsonResponse({ success: true, id: result.lastInsertRowid });
  } catch (error) {
    console.error('Admin faq error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
};

export const PUT: APIRoute = async ({ request, locals }) => {
  const env = (locals as any).runtime?.env;
  const authError = await checkAuth(request, env);
  if (authError) return authError;

  const db = env.DB;
  try {
    const body = await request.json();
    const result = await db.prepare(
      'UPDATE faq SET question = ?, answer = ?, category = ?, sort_order = ? WHERE id = ?'
    ).bind(
      body.question,
      body.answer,
      body.category,
      body.sort_order || 0,
      body.id
    ).run();
    return jsonResponse({ success: true, changes: result.changes });
  } catch (error) {
    console.error('Admin faq error:', error);
    return jsonResponse({ error: error.message }, 500);
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
      'DELETE FROM faq WHERE id = ?'
    ).bind(id).run();
    return jsonResponse({ success: true, changes: result.changes });
  } catch (error) {
    console.error('Admin faq error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
};
