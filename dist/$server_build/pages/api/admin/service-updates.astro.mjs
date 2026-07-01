import { c as checkAuth, j as jsonResponse, h as handleOptions } from '../../../chunks/auth_BrJzRTio.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const OPTIONS = () => handleOptions();
const GET = async ({ request, locals }) => {
  const env = locals;
  const authError = await checkAuth(request, env);
  if (authError) return authError;
  const db = env.DB;
  try {
    const results = await db.prepare(
      `SELECT su.*, suc.name as category_name
       FROM service_updates su
       LEFT JOIN service_update_categories suc ON su.category_id = suc.id
       ORDER BY su.publish_date DESC, su.sort_order ASC`
    ).all();
    return jsonResponse(results.results);
  } catch (error) {
    console.error("Admin updates error:", error);
    return jsonResponse({ error: error.message }, 500);
  }
};
const POST = async ({ request, locals }) => {
  const env = locals;
  const authError = await checkAuth(request, env);
  if (authError) return authError;
  const db = env.DB;
  try {
    const body = await request.json();
    const result = await db.prepare(
      `INSERT INTO service_updates (category_id, title, content, image_key, community, publish_date, sort_order)
       VALUES (?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      body.category_id ? parseInt(body.category_id) : null,
      body.title,
      body.content || "",
      body.image_key || null,
      body.community || "",
      body.publish_date || "",
      parseInt(body.sort_order) || 0
    ).run();
    return jsonResponse({ success: true, id: result.lastInsertRowid });
  } catch (error) {
    console.error("Admin updates error:", error);
    return jsonResponse({ error: error.message }, 500);
  }
};
const PUT = async ({ request, locals }) => {
  const env = locals;
  const authError = await checkAuth(request, env);
  if (authError) return authError;
  const db = env.DB;
  try {
    const body = await request.json();
    const result = await db.prepare(
      `UPDATE service_updates
       SET category_id = ?, title = ?, content = ?, image_key = ?, community = ?, publish_date = ?, sort_order = ?, updated_at = CURRENT_TIMESTAMP
       WHERE id = ?`
    ).bind(
      body.category_id ? parseInt(body.category_id) : null,
      body.title,
      body.content || "",
      body.image_key || null,
      body.community || "",
      body.publish_date || "",
      parseInt(body.sort_order) || 0,
      parseInt(body.id)
    ).run();
    return jsonResponse({ success: true, changes: result.changes });
  } catch (error) {
    console.error("Admin updates error:", error);
    return jsonResponse({ error: error.message }, 500);
  }
};
const DELETE = async ({ request, locals }) => {
  const env = locals;
  const authError = await checkAuth(request, env);
  if (authError) return authError;
  const db = env.DB;
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    const result = await db.prepare(
      "DELETE FROM service_updates WHERE id = ?"
    ).bind(id).run();
    return jsonResponse({ success: true, changes: result.changes });
  } catch (error) {
    console.error("Admin updates error:", error);
    return jsonResponse({ error: error.message }, 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  OPTIONS,
  POST,
  PUT,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
