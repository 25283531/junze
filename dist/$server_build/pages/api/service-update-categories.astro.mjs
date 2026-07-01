import { j as jsonResponse, h as handleOptions } from '../../chunks/auth_BrJzRTio.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const OPTIONS = () => handleOptions();
const GET = async ({ locals }) => {
  const env = locals;
  const db = env.DB;
  try {
    const results = await db.prepare(
      "SELECT * FROM service_update_categories ORDER BY sort_order ASC"
    ).all();
    return jsonResponse(results.results);
  } catch (error) {
    console.error("Categories error:", error);
    return jsonResponse({ error: error.message }, 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  OPTIONS,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
