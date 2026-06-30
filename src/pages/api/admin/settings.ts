import type { APIRoute } from 'astro';
import { jsonResponse, handleOptions, checkAuth } from '@/lib/auth.js';

export const prerender = false;

export const OPTIONS: APIRoute = () => handleOptions();

export const GET: APIRoute = async ({ request, locals }) => {
  const env = locals as any;
  const authError = await checkAuth(request, env);
  if (authError) return authError;

  const db = env.DB;
  try {
    const result = await db.prepare(
      'SELECT * FROM business_info WHERE id = 1'
    ).first();
    if (result) {
      result.service_areas = JSON.parse(result.service_areas);
    }
    return jsonResponse(result);
  } catch (error: any) {
    console.error('Admin settings error:', error);
    return jsonResponse({ error: error.message || 'Internal server error' }, 500);
  }
};

export const PUT: APIRoute = async ({ request, locals }) => {
  const env = locals as any;
  const authError = await checkAuth(request, env);
  if (authError) return authError;

  const db = env.DB;
  try {
    const body = await request.json() as any;
    const result = await db.prepare(
      'UPDATE business_info SET name = ?, description = ?, telephone = ?, address = ?, service_areas = ?, license = ?, license_image_key = ?, wechat = ?, updated_at = CURRENT_TIMESTAMP WHERE id = 1'
    ).bind(
      body.name,
      body.description,
      body.telephone,
      body.address,
      JSON.stringify(body.service_areas),
      body.license,
      body.license_image_key,
      body.wechat
    ).run();
    return jsonResponse({ success: true, changes: result.changes });
  } catch (error: any) {
    console.error('Admin settings error:', error);
    return jsonResponse({ error: 'Internal server error' }, 500);
  }
};
