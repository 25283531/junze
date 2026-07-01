import { j as jsonResponse, h as handleOptions } from '../../../chunks/auth_BrJzRTio.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const OPTIONS = () => handleOptions();
const GET = async ({ request, locals }) => {
  const env = locals;
  const kv = env.KV;
  if (!kv) return jsonResponse({ error: "KV not available" }, 500);
  try {
    const url = new URL(request.url);
    const key = url.searchParams.get("key");
    if (!key) return jsonResponse({ error: "Missing key" }, 400);
    const value = await kv.get(key, "text");
    if (!value) return jsonResponse({ error: "Not found" }, 404);
    const imageData = JSON.parse(value);
    return new Response(Buffer.from(imageData.data, "base64"), {
      headers: {
        "Content-Type": imageData.mimeType,
        "Cache-Control": "public, max-age=31536000"
      }
    });
  } catch (error) {
    console.error("Get image error:", error);
    return jsonResponse({ error: error.message }, 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  OPTIONS,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
