export const onRequest = async ({ env, request }) => {
  const db = env.DB;

  try {
    const result = await db.prepare(
      'SELECT * FROM business_info WHERE id = 1'
    ).first();
    if (result) {
      result.service_areas = JSON.parse(result.service_areas);
    }
    return new Response(JSON.stringify(result), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching business info:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
