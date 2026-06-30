export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async ({ request, locals }) => {
  const env = locals.runtime?.env;
  const db = env?.DB;
  const url = new URL(request.url);
  const category = url.searchParams.get("category");
  if (!db) {
    return new Response(JSON.stringify({ error: 'D1 database binding "DB" is not configured.' }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    let query = "SELECT * FROM faq ORDER BY sort_order ASC";
    const params = [];
    if (category && category !== "all") {
      query = "SELECT * FROM faq WHERE category = ? ORDER BY sort_order ASC";
      params.push(category);
    }
    const results = await db.prepare(query).bind(...params).all();
    return new Response(JSON.stringify(results.results), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error fetching faq:", error);
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
