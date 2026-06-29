export const onRequest = async ({ env, request }) => {
  const db = env.DB;

  try {
    const results = await db.prepare(
      'SELECT * FROM cases ORDER BY completion_date DESC'
    ).all();
    return new Response(JSON.stringify(results.results), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching cases:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
