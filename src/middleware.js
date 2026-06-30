export const onRequest = async (context, next) => {
  // Astro's Cloudflare adapter automatically provides runtime.env
  // Only set it if not already present
  if (!context.locals.runtime) {
    context.locals.runtime = { env: context.env || {} };
  }
  
  // Also add bindings directly to locals for easier access
  if (context.env) {
    if (context.env.DB) {
      context.locals.DB = context.env.DB;
    }
    if (context.env.KV) {
      context.locals.KV = context.env.KV;
    }
    context.locals.JWT_SECRET = context.env.JWT_SECRET;
    context.locals.ADMIN_PASSWORD = context.env.ADMIN_PASSWORD;
  }
  
  return next();
};
