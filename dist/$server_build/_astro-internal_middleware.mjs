import 'es-module-lexer';
import './chunks/astro-designed-error-pages_DTpmO-o1.mjs';
import '@astrojs/internal-helpers/path';
import 'cookie';
import { s as sequence } from './chunks/render-context_asHKir4V.mjs';

const VERIFICATION_PATTERNS = [
  'BingSiteAuth.xml',
  'google',
  'yandex_',
  'baidu_verify_',
  'sogousiteverification',
  '360siteverify',
  'pki-validation',
];

function isVerificationRequest(url) {
  const pathname = new URL(url).pathname;
  const filename = pathname.replace(/^\//, '');
  if (filename.includes('/')) return false;
  return VERIFICATION_PATTERNS.some(p => filename.includes(p));
}

function getContentType(filename) {
  if (filename.endsWith('.xml')) return 'application/xml';
  if (filename.endsWith('.html')) return 'text/html';
  if (filename.endsWith('.txt')) return 'text/plain';
  return 'application/octet-stream';
}

/**
 * Convert HTML to markdown for agent requests
 */
function htmlToMarkdown(html, url) {
  let md = '';

  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (titleMatch) {
    md += `# ${titleMatch[1].trim()}\n\n`;
  }

  const descMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i);
  if (descMatch) {
    md += `${descMatch[1].trim()}\n\n`;
  }

  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) {
    let body = bodyMatch[1];
    body = body.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
    body = body.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
    body = body.replace(/<svg[^>]*>[\s\S]*?<\/svg>/gi, '');

    const headingRegex = /<(h[1-6])[^>]*>(.*?)<\/\1>/gi;
    let headingMatch;
    while ((headingMatch = headingRegex.exec(body)) !== null) {
      const level = parseInt(headingMatch[1][1]);
      const text = headingMatch[2].replace(/<[^>]+>/g, '').trim();
      if (text) md += `${'#'.repeat(level)} ${text}\n\n`;
    }

    const pRegex = /<p[^>]*>(.*?)<\/p>/gi;
    let pMatch;
    while ((pMatch = pRegex.exec(body)) !== null) {
      const text = pMatch[1].replace(/<[^>]+>/g, '').trim();
      if (text && text.length > 10) md += `${text}\n\n`;
    }

    const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gi;
    let linkMatch;
    const links = [];
    while ((linkMatch = linkRegex.exec(body)) !== null) {
      const href = linkMatch[1];
      const text = linkMatch[2].replace(/<[^>]+>/g, '').trim();
      if (text && !href.startsWith('#') && !href.startsWith('javascript:')) {
        links.push(`- [${text}](${href})`);
      }
    }
    if (links.length > 0) {
      md += `## Links\n\n${links.join('\n')}\n\n`;
    }
  }

  md += `---\nSource: ${url}\n`;
  return md;
}

function acceptsMarkdown(request) {
  const accept = request.headers.get('accept');
  if (!accept) return false;
  return accept.includes('text/markdown');
}

function addLinkHeaders(response, url) {
  const pathname = new URL(url).pathname;
  const contentType = response.headers.get('content-type');
  if (!contentType || !contentType.includes('text/html')) return response;
  if (pathname.startsWith('/api/') || pathname.startsWith('/admin/')) return response;

  const links = [
    '</sitemap.xml>; rel="sitemap"',
    '</robots.txt>; rel="robots"',
  ];

  if (pathname === '/') {
    links.push('</api/services>; rel="service-desc"; type="application/json"');
    links.push('</api/cases>; rel="related"; type="application/json"');
    links.push('</api/faq>; rel="help"; type="application/json"');
    links.push('</api/business>; rel="about"; type="application/json"');
  }

  const existingLink = response.headers.get('link');
  const newLink = [...(existingLink ? [existingLink] : []), ...links].join(', ');

  const newResponse = new Response(response.body, response);
  newResponse.headers.set('link', newLink);
  return newResponse;
}

const onRequest$1 = async (context, next) => {
  const env = context.locals.runtime?.env || context.env || {};

  if (env.DB && !context.locals.DB) context.locals.DB = env.DB;
  if (env.KV && !context.locals.KV) context.locals.KV = env.KV;
  if (env.JWT_SECRET && !context.locals.JWT_SECRET) context.locals.JWT_SECRET = env.JWT_SECRET;
  if (env.ADMIN_PASSWORD && !context.locals.ADMIN_PASSWORD) context.locals.ADMIN_PASSWORD = env.ADMIN_PASSWORD;

  // Serve verification files from KV
  if (isVerificationRequest(context.request.url)) {
    const pathname = new URL(context.request.url).pathname;
    const filename = pathname.replace(/^\//, '');
    const kv = context.locals.KV;
    if (kv) {
      try {
        const value = await kv.get(`verify:${filename}`, 'text');
        if (value) {
          return new Response(value, {
            status: 200,
            headers: {
              'Content-Type': getContentType(filename),
              'Cache-Control': 'public, max-age=3600',
            },
          });
        }
      } catch (e) {
        console.error('Serve verify file error:', e);
      }
    }
  }

  const response = await next();

  // Add Link headers for agent discovery (RFC 8288)
  let finalResponse = addLinkHeaders(response, context.request.url);

  // Support Markdown for Agents
  if (acceptsMarkdown(context.request)) {
    const contentType = finalResponse.headers.get('content-type');
    if (contentType && contentType.includes('text/html')) {
      try {
        const html = await finalResponse.text();
        const markdown = htmlToMarkdown(html, context.request.url);

        const headers = new Headers(finalResponse.headers);
        headers.set('content-type', 'text/markdown; charset=utf-8');
        headers.delete('content-length');

        finalResponse = new Response(markdown, {
          status: finalResponse.status,
          statusText: finalResponse.statusText,
          headers,
        });
      } catch (e) {
        console.error('Markdown conversion error:', e);
      }
    }
  }

  return finalResponse;
};

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
