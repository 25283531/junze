import type { APIRoute } from 'astro';
import { jsonResponse, handleOptions, checkAuth } from '@/lib/auth.js';

export const prerender = false;

export const OPTIONS: APIRoute = () => handleOptions();

export const POST: APIRoute = async ({ request, locals }) => {
  const env = locals as any;
  const authError = await checkAuth(request, env);
  if (authError) return authError;

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return jsonResponse({ error: 'No file uploaded' }, 400);
    }

    const buffer = await file.arrayBuffer();
    const base64 = btoa(String.fromCharCode(...new Uint8Array(buffer)));
    const mimeType = file.type;

    const imageData = {
      data: base64,
      mimeType: mimeType,
      filename: file.name,
      uploadedAt: new Date().toISOString()
    };

    const imageKey = `license_${Date.now()}`;
    await env.KV.put(imageKey, JSON.stringify(imageData), {
      expirationTtl: 60 * 60 * 24 * 365
    });

    return jsonResponse({ success: true, imageKey });
  } catch (error: any) {
    console.error('Upload error:', error);
    return jsonResponse({ error: error.message || 'Internal server error' }, 500);
  }
};
