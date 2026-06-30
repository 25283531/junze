import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ request, locals }) => {
  const env = (locals as any).runtime?.env;
  const url = new URL(request.url);
  const key = url.searchParams.get('key');
  
  if (!key) {
    return new Response('Bad Request', { status: 400 });
  }

  try {
    const imageDataStr = await env.KV.get(key);
    if (!imageDataStr) {
      return new Response('Not Found', { status: 404 });
    }

    const imageData = JSON.parse(imageDataStr);
    const buffer = Uint8Array.from(atob(imageData.data), c => c.charCodeAt(0));

    return new Response(buffer, {
      headers: {
        'Content-Type': imageData.mimeType,
        'Content-Disposition': 'inline',
        'Cache-Control': 'public, max-age=86400',
        'X-Robots-Tag': 'noindex, nofollow',
      },
    });
  } catch (error) {
    console.error('Get image error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};
