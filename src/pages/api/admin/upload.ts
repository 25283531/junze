import type { APIRoute } from 'astro';
import { jsonResponse, handleOptions, checkAuth } from '@/lib/auth.js';

export const prerender = false;

export const OPTIONS: APIRoute = () => handleOptions();

export const POST: APIRoute = async ({ request, locals }) => {
  const env = locals as any;
  const authError = await checkAuth(request, env);
  if (authError) return authError;

  const kv = env.KV;
  if (!kv) {
    console.error('Upload: KV binding not available');
    return jsonResponse({ error: 'KV binding not available' }, 500);
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return jsonResponse({ error: 'No file uploaded' }, 400);
    }

    console.log('Upload: file received, size:', file.size, 'type:', file.type);

    const buffer = await file.arrayBuffer();
    const uint8Array = new Uint8Array(buffer);

    // Chunked base64 encoding
    let base64 = '';
    const chunkSize = 1024;
    for (let i = 0; i < uint8Array.length; i += chunkSize) {
      const chunk = uint8Array.subarray(i, i + chunkSize);
      let binary = '';
      for (let j = 0; j < chunk.length; j++) {
        binary += String.fromCharCode(chunk[j]);
      }
      base64 += btoa(binary);
    }

    const imageData = {
      data: base64,
      mimeType: file.type,
      filename: file.name,
      uploadedAt: new Date().toISOString()
    };

    const imageKey = `img_${Date.now()}`;
    console.log('Upload: writing to KV, key:', imageKey, 'data length:', base64.length);
    await kv.put(imageKey, JSON.stringify(imageData), {
      expirationTtl: 60 * 60 * 24 * 365
    });
    console.log('Upload: KV write complete');

    return jsonResponse({ success: true, imageKey });
  } catch (error: any) {
    console.error('Upload error:', error?.message, error?.stack);
    return jsonResponse({ error: error.message || 'Internal server error' }, 500);
  }
};
