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
      "SELECT * FROM service_update_categories ORDER BY sort_order ASC"
    ).all();
    return jsonResponse(results.results);
  } catch (error) {
    console.error("Admin categories error:", error);
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
      "INSERT INTO service_update_categories (name, sort_order) VALUES (?, ?)"
    ).bind(
      body.name,
      parseInt(body.sort_order) || 0
    ).run();
    return jsonResponse({ success: true, id: result.lastInsertRowid });
  } catch (error) {
    console.error("Admin categories error:", error);
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
      "UPDATE service_update_categories SET name = ?, sort_order = ? WHERE id = ?"
    ).bind(
      body.name,
      parseInt(body.sort_order) || 0,
      parseInt(body.id)
    ).run();
    return jsonResponse({ success: true, changes: result.changes });
  } catch (error) {
    console.error("Admin categories error:", error);
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
    await db.prepare(
      "DELETE FROM service_updates WHERE category_id = ?"
    ).bind(id).run();
    const result = await db.prepare(
      "DELETE FROM service_update_categories WHERE id = ?"
    ).bind(id).run();
    return jsonResponse({ success: true, changes: result.changes });
  } catch (error) {
    console.error("Admin categories error:", error);
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
