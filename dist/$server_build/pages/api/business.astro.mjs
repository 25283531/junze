export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async ({ request, locals }) => {
  const env = locals.runtime?.env;
  const db = env?.DB;
  if (!db) {
    return new Response(JSON.stringify({ error: 'D1 database binding "DB" is not configured.' }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const result = await db.prepare(
      "SELECT * FROM business_info WHERE id = 1"
    ).first();
    if (result) {
      result.service_areas = JSON.parse(result.service_areas);
    }
    return new Response(JSON.stringify(result), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error fetching business info:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
