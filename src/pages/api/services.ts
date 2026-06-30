import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ request, locals }) => {
  const env = (locals as any).runtime?.env;
  const db = env?.DB;
  const url = new URL(request.url);
  const slug = url.searchParams.get('slug');

  if (!db) {
    return new Response(JSON.stringify({ error: 'D1 database binding "DB" is not configured.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    if (slug) {
      const result = await db.prepare(
        'SELECT * FROM services WHERE slug = ?'
      ).bind(slug).first();
      if (result) {
        try { result.process = JSON.parse(result.process); } catch(e) { result.process = []; }
      }
      return new Response(JSON.stringify(result), {
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      const results = await db.prepare(
        'SELECT * FROM services ORDER BY sort_order ASC'
      ).all();
      results.results.forEach(r => {
        try { r.process = JSON.parse(r.process); } catch(e) { r.process = []; }
      });
      return new Response(JSON.stringify(results.results), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (error) {
    console.error('Error fetching services:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
