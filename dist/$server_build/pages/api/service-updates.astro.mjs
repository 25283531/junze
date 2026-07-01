import { j as jsonResponse, h as handleOptions } from '../../chunks/auth_BrJzRTio.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const OPTIONS = () => handleOptions();
const GET = async ({ request, locals }) => {
  const env = locals;
  const db = env.DB;
  try {
    const url = new URL(request.url);
    const categoryId = url.searchParams.get("category_id");
    let query = `SELECT su.*, suc.name as category_name
                 FROM service_updates su
                 LEFT JOIN service_update_categories suc ON su.category_id = suc.id
                 ORDER BY su.publish_date DESC, su.sort_order ASC`;
    const params = [];
    if (categoryId) {
      query = `SELECT su.*, suc.name as category_name
               FROM service_updates su
               LEFT JOIN service_update_categories suc ON su.category_id = suc.id
               WHERE su.category_id = ?
               ORDER BY su.publish_date DESC, su.sort_order ASC`;
      params.push(parseInt(categoryId));
    }
    const results = await db.prepare(query).bind(...params).all();
    return jsonResponse(results.results);
  } catch (error) {
    console.error("Service updates error:", error);
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
