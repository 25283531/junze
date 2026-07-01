/**
 * Database utility for SSR pages
 * In SSR mode, env is available via Astro.locals or getServerContext
 */
export function getDb(env) {
  // Middleware copies DB to locals top-level; also check runtime.env
  return env.DB || (env.runtime && env.runtime.env && env.runtime.env.DB);
}

export async function getAllServices(env) {
  const db = getDb(env);
  const results = await db.prepare('SELECT * FROM services ORDER BY sort_order ASC').all();
  return results.results.map(r => {
    try { r.process = JSON.parse(r.process); } catch(e) { r.process = []; }
    return r;
  });
}

export async function getServiceBySlug(env, slug) {
  const db = getDb(env);
  const result = await db.prepare('SELECT * FROM services WHERE slug = ?').bind(slug).first();
  if (result) {
    try { result.process = JSON.parse(result.process); } catch(e) { result.process = []; }
  }
  return result;
}

export async function getAllCases(env) {
  const db = getDb(env);
  const results = await db.prepare('SELECT * FROM cases ORDER BY id DESC').all();
  return results.results;
}

export async function getAllFaq(env) {
  const db = getDb(env);
  const results = await db.prepare('SELECT * FROM faq ORDER BY sort_order ASC').all();
  return results.results;
}

export async function getBusinessInfo(env) {
  const db = getDb(env);
  const result = await db.prepare('SELECT * FROM business_info WHERE id = 1').first();
  if (result && result.service_areas) {
    try { result.service_areas = JSON.parse(result.service_areas); } catch(e) { result.service_areas = []; }
  }
  return result;
}

export async function getAllServiceUpdateCategories(env) {
  const db = getDb(env);
  const results = await db.prepare('SELECT * FROM service_update_categories ORDER BY sort_order ASC').all();
  return results.results;
}

export async function getAllServiceUpdates(env, categoryId) {
  const db = getDb(env);
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
    params.push(categoryId);
  }
  const stmt = db.prepare(query);
  const results = params.length > 0 ? await stmt.bind(...params).all() : await stmt.all();
  return results.results;
}
