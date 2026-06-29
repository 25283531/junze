export const onRequest = async ({ env, request }) => {
  const db = env.DB;
  const url = new URL(request.url);
  const slug = url.searchParams.get('slug');

  try {
    if (slug) {
      const result = await db.prepare(
        'SELECT * FROM services WHERE slug = ?'
      ).bind(slug).first();
      if (result) {
        result.process = JSON.parse(result.process);
      }
      return new Response(JSON.stringify(result), {
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      const results = await db.prepare(
        'SELECT * FROM services ORDER BY sort_order ASC'
      ).all();
      results.results.forEach(r => {
        r.process = JSON.parse(r.process);
      });
      return new Response(JSON.stringify(results.results), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (error) {
    console.error('Error fetching services:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
