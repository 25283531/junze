import 'es-module-lexer';
import './chunks/astro-designed-error-pages_DTpmO-o1.mjs';
import '@astrojs/internal-helpers/path';
import 'cookie';
import { s as sequence } from './chunks/render-context_asHKir4V.mjs';

const onRequest$1 = async (context, next) => {
  // Astro Cloudflare adapter injects bindings into locals directly
  // Fallback to context.env if runtime.env is not available
  const env = context.locals.runtime?.env || context.env || {};
  
  // Copy bindings to locals top-level for API routes to access
  if (env.DB && !context.locals.DB) {
    context.locals.DB = env.DB;
  }
  if (env.KV && !context.locals.KV) {
    context.locals.KV = env.KV;
  }
  if (env.JWT_SECRET && !context.locals.JWT_SECRET) {
    context.locals.JWT_SECRET = env.JWT_SECRET;
  }
  if (env.ADMIN_PASSWORD && !context.locals.ADMIN_PASSWORD) {
    context.locals.ADMIN_PASSWORD = env.ADMIN_PASSWORD;
  }
  
  return next();
};

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
