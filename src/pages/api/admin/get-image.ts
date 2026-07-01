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

    let imageData;
    try {
      imageData = JSON.parse(value);
    } catch (e) {
      console.error('Get image: invalid JSON data for key:', key);
      return jsonResponse({ error: 'Invalid image data' }, 400);
    }

    if (!imageData.data || !imageData.mimeType) {
      console.error('Get image: missing data or mimeType for key:', key);
      return jsonResponse({ error: 'Incomplete image data' }, 400);
    }

    try {
      // Decode base64 to binary without using Node.js Buffer
      const binaryString = atob(imageData.data);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      return new Response(bytes, {
        headers: {
          'Content-Type': imageData.mimeType,
          'Cache-Control': 'public, max-age=31536000',
        },
      });
    } catch (e) {
      console.error('Get image: base64 decode failed for key:', key, e?.message);
      return jsonResponse({ error: 'Corrupted image data' }, 400);
    }
  } catch (error: any) {
    console.error('Get image error:', error);
    return jsonResponse({ error: error.message }, 500);
  }
};
