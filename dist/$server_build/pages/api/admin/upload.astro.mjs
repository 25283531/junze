import { h as handleOptions, c as checkAuth, j as jsonResponse } from '../../../chunks/auth_BrJzRTio.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const OPTIONS = () => handleOptions();
const POST = async ({ request, locals }) => {
  const env = locals;
  const authError = await checkAuth(request, env);
  if (authError) return authError;
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    if (!file) {
      return jsonResponse({ error: "No file uploaded" }, 400);
    }
    const buffer = await file.arrayBuffer();
    const base64 = btoa(String.fromCharCode(...new Uint8Array(buffer)));
    const mimeType = file.type;
    const imageData = {
      data: base64,
      mimeType,
      filename: file.name,
      uploadedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    const imageKey = `license_${Date.now()}`;
    await env.KV.put(imageKey, JSON.stringify(imageData), {
      expirationTtl: 60 * 60 * 24 * 365
    });
    return jsonResponse({ success: true, imageKey });
  } catch (error) {
    console.error("Upload error:", error);
    return jsonResponse({ error: error.message || "Internal server error" }, 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  OPTIONS,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
