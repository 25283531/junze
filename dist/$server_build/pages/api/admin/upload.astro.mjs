import { h as handleOptions, c as checkAuth, j as jsonResponse } from '../../../chunks/auth_BrJzRTio.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const OPTIONS = () => handleOptions();
const POST = async ({ request, locals }) => {
  const env = locals;
  const authError = await checkAuth(request, env);
  if (authError) return authError;
  const kv = env.KV;
  if (!kv) {
    console.error("Upload: KV binding not available");
    return jsonResponse({ error: "KV binding not available" }, 500);
  }
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    if (!file) {
      return jsonResponse({ error: "No file uploaded" }, 400);
    }
    console.log("Upload: file received, size:", file.size, "type:", file.type);
    const buffer = await file.arrayBuffer();
    const uint8Array = new Uint8Array(buffer);
    let base64 = "";
    const chunkSize = 1024;
    for (let i = 0; i < uint8Array.length; i += chunkSize) {
      const chunk = uint8Array.subarray(i, i + chunkSize);
      let binary = "";
      for (let j = 0; j < chunk.length; j++) {
        binary += String.fromCharCode(chunk[j]);
      }
      base64 += btoa(binary);
    }
    const imageData = {
      data: base64,
      mimeType: file.type,
      filename: file.name,
      uploadedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    const imageKey = `img_${Date.now()}`;
    console.log("Upload: writing to KV, key:", imageKey, "data length:", base64.length);
    await kv.put(imageKey, JSON.stringify(imageData), {
      expirationTtl: 60 * 60 * 24 * 365
    });
    console.log("Upload: KV write complete");
    return jsonResponse({ success: true, imageKey });
  } catch (error) {
    console.error("Upload error:", error?.message, error?.stack);
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
