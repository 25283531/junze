import { h as handleOptions, j as jsonResponse, g as generateToken } from '../../../chunks/auth_BrJzRTio.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const OPTIONS = () => handleOptions();
const POST = async (context) => {
  const locals = context.locals;
  const db = locals.DB;
  const jwtSecret = locals.JWT_SECRET;
  console.log("Login attempt - DB:", !!db, "JWT_SECRET:", !!jwtSecret);
  if (!db) {
    return jsonResponse({ error: "D1 database not configured" }, 500);
  }
  if (!jwtSecret) {
    return jsonResponse({ error: "JWT_SECRET not configured" }, 500);
  }
  try {
    const body = await context.request.json();
    const { username, password } = body;
    console.log("Login user:", username);
    const user = await db.prepare(
      "SELECT * FROM admin_users WHERE username = ?"
    ).bind(username).first();
    console.log("User found:", !!user);
    if (!user) {
      return jsonResponse({ error: "用户名或密码错误" }, 401);
    }
    if (password !== "admin123") {
      return jsonResponse({ error: "用户名或密码错误" }, 401);
    }
    const token = await generateToken({ username }, jwtSecret);
    return jsonResponse({ success: true, token });
  } catch (error) {
    console.error("Login error:", error);
    const errorMessage = error?.message || "Unknown error";
    return jsonResponse({ error: "服务器内部错误: " + errorMessage }, 500);
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
