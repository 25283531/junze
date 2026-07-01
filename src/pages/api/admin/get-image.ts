import type { APIRoute } from 'astro';
import { jsonResponse, handleOptions } from '@/lib/auth.js';

export const prerender = false;

export const OPTIONS: APIRoute = () => handleOptions();

export const GET: APIRoute = async ({ request, locals }) => {
  const env = locals as any;
  const kv = env.KV;
  if (!kv) return jsonResponse({ error: 'KV not available' }, 500);

  try {
    const url = new URL(request.url);
    const key = url.searchParams.get('key');
    if (!key) return jsonResponse({ error: 'Missing key' }, 400);

    const value = await kv.get(key, 'text');
    if (!value) return jsonResponse({ error: 'Not found' }, 404);

    const imageData = JSON.parse(value);
    return new Response(Buffer.from(imageData.data, 'base64'), {
      headers: {
        'Content-Type': imageData.mimeType,
        'Cache-Control': 'public, max-age=31536000',
      },
    });
  } catch (error: any) {
    console.error('Get image error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
};
