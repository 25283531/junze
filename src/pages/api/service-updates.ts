import type { APIRoute } from 'astro';
import { jsonResponse, handleOptions } from '@/lib/auth.js';

export const prerender = false;

export const OPTIONS: APIRoute = () => handleOptions();

export const GET: APIRoute = async ({ request, locals }) => {
  const env = locals as any;
  const db = env.DB;
  try {
    const url = new URL(request.url);
    const categoryId = url.searchParams.get('category_id');

    let query = `SELECT su.*, suc.name as category_name
                 FROM service_updates su
                 LEFT JOIN service_update_categories suc ON su.category_id = suc.id
                 ORDER BY su.publish_date DESC, su.sort_order ASC`;
    const params: any[] = [];

    if (categoryId) {
      query = `SELECT su.*, suc.name as category_name
               FROM service_updates su
               LEFT JOIN service_update_categories suc ON su.category_id = suc.id
               WHERE su.category_id = ?
               ORDER BY su.publish_date DESC, su.sort_order ASC`;
      params.push(parseInt(categoryId));
    }

    const stmt = db.prepare(query);
    const results = params.length > 0 ? await stmt.bind(...params).all() : await stmt.all();
    return jsonResponse(results.results);
  } catch (error: any) {
    console.error('Service updates error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
};
