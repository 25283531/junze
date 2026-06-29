export const onRequest: PagesFunction = async ({ env }) => {
  const db = env.DB;

  try {
    const results = await db.prepare(
      'SELECT * FROM faq ORDER BY sort_order ASC'
    ).all();
    return new Response(JSON.stringify(results.results), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching faq:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};