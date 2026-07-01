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
    const uint8Array = new Uint8Array(buffer);
    // Chunked base64 encoding to avoid call stack overflow on large files
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
