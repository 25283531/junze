import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ request, locals }) => {
  const env = (locals as any).runtime?.env;
  const db = env?.DB;
  const url = new URL(request.url);
  const category = url.searchParams.get('category');

  if (!db) {
    return new Response(JSON.stringify({ error: 'D1 database binding "DB" is not configured.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    let query = 'SELECT * FROM faq ORDER BY sort_order ASC';
    const params = [];
    
    if (category && category !== 'all') {
      query = 'SELECT * FROM faq WHERE category = ? ORDER BY sort_order ASC';
      params.push(category);
    }

    const results = await db.prepare(query).bind(...params).all();
    return new Response(JSON.stringify(results.results), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching faq:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
