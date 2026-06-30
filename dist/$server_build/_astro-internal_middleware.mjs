import 'es-module-lexer';
import './chunks/astro-designed-error-pages_DTpmO-o1.mjs';
import '@astrojs/internal-helpers/path';
import 'cookie';
import { s as sequence } from './chunks/render-context_asHKir4V.mjs';

const onRequest$1 = async (context, next) => {
  context.locals.env = context.env;
  return next();
};

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
