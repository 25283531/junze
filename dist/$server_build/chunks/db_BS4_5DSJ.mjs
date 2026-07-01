import { c as createAstro, a as createComponent, d as renderTemplate, e as addAttribute, m as maybeRenderHead, b as renderSlot, r as renderHead, f as renderComponent } from './astro/server_DkHii4NB.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro("https://junze-anju.pages.dev");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const b = Astro2.props.business || {};
  const telephone = b.telephone || "";
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<header class="bg-white shadow-sm sticky top-0 z-50"> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center h-16"> <div class="flex items-center"> <a href="/" class="flex items-center space-x-3 group"> <div class="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:bg-primary-dark transition-colors duration-300"> <span class="text-white font-bold text-lg">\u94A7</span> </div> <div> <span class="text-xl font-bold text-gray-900">', '</span> <span class="block text-xs text-gray-500">\u6CB3\u5357\u5E73\u9876\u5C71\u4E00\u7AD9\u5F0F\u5BB6\u5C45\u670D\u52A1\u5E73\u53F0</span> </div> </a> </div> <nav class="hidden md:flex space-x-8"> <a href="/" class="text-gray-700 hover:text-primary font-medium transition-colors duration-300">\u9996\u9875</a> <a href="/services" class="text-gray-700 hover:text-primary font-medium transition-colors duration-300">\u670D\u52A1\u9879\u76EE</a> <a href="/updates" class="text-gray-700 hover:text-primary font-medium transition-colors duration-300">\u670D\u52A1\u52A8\u6001</a> <a href="/cases" class="text-gray-700 hover:text-primary font-medium transition-colors duration-300">\u771F\u5B9E\u6848\u4F8B</a> <a href="/faq" class="text-gray-700 hover:text-primary font-medium transition-colors duration-300">\u5E38\u89C1\u95EE\u9898</a> <a href="/about" class="text-gray-700 hover:text-primary font-medium transition-colors duration-300">\u5173\u4E8E\u6211\u4EEC</a> </nav> <div class="flex items-center space-x-4"> ', ' <button class="md:hidden p-2 text-gray-600 hover:text-primary transition-colors duration-300" onclick="toggleMobileMenu()"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> </div> <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100"> <div class="px-4 py-4 space-y-2 max-w-6xl mx-auto"> <a href="/" class="block py-3 text-gray-700 hover:text-primary font-medium transition-colors duration-300">\u9996\u9875</a> <a href="/services" class="block py-3 text-gray-700 hover:text-primary font-medium transition-colors duration-300">\u670D\u52A1\u9879\u76EE</a> <a href="/updates" class="block py-3 text-gray-700 hover:text-primary font-medium transition-colors duration-300">\u670D\u52A1\u52A8\u6001</a> <a href="/cases" class="block py-3 text-gray-700 hover:text-primary font-medium transition-colors duration-300">\u771F\u5B9E\u6848\u4F8B</a> <a href="/faq" class="block py-3 text-gray-700 hover:text-primary font-medium transition-colors duration-300">\u5E38\u89C1\u95EE\u9898</a> <a href="/about" class="block py-3 text-gray-700 hover:text-primary font-medium transition-colors duration-300">\u5173\u4E8E\u6211\u4EEC</a> ', " </div> </div> <script>\n    function toggleMobileMenu() {\n      const menu = document.getElementById('mobile-menu');\n      menu.classList.toggle('hidden');\n    }\n\n    // Dynamic update from API (fallback for when business data changes without redeploy)\n    (function() {\n      fetch('/api/business')\n        .then(function(r) { return r.json(); })\n        .then(function(data) {\n          if (data && data.telephone) {\n            var phone = data.telephone;\n            var el1 = document.getElementById('headerPhone');\n            var el2 = document.getElementById('mobilePhone');\n            var link1 = document.getElementById('headerPhoneLink');\n            var link2 = document.getElementById('mobilePhoneLink');\n            if (el1) el1.textContent = phone;\n            if (el2) el2.textContent = phone;\n            if (link1) link1.href = 'tel:' + phone;\n            if (link2) link2.href = 'tel:' + phone;\n          }\n        })\n        .catch(function() {});\n    })();\n  <\/script> </header>"])), maybeRenderHead(), b.name || "\u94A7\u6CFD\u5B89\u5C45", telephone && renderTemplate`<a id="headerPhoneLink"${addAttribute(`tel:${telephone}`, "href")} class="hidden sm:flex items-center space-x-2 text-primary font-semibold hover:text-primary-dark transition-colors duration-300"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span id="headerPhone">${telephone}</span> </a>`, telephone && renderTemplate`<a id="mobilePhoneLink"${addAttribute(`tel:${telephone}`, "href")} class="block py-3 text-primary font-semibold flex items-center space-x-2"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span id="mobilePhone">${telephone}</span> </a>`);
}, "E:/code/junze/junze/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://junze-anju.pages.dev");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const b = Astro2.props.business || {};
  const telephone = b.telephone || "";
  const address = b.address || "";
  const wechat = b.wechat || "";
  return renderTemplate(_a || (_a = __template(["", '<footer class="bg-gray-900 text-white"> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"> <div class="lg:col-span-2"> <div class="flex items-center space-x-3 mb-6"> <div class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center"> <span class="text-white font-bold text-xl">\u94A7</span> </div> <div> <span class="text-2xl font-bold">', '</span> <span class="block text-sm text-gray-400">\u6CB3\u5357\u5E73\u9876\u5C71\u4E00\u7AD9\u5F0F\u5BB6\u5C45\u670D\u52A1\u5E73\u53F0</span> </div> </div> <p class="text-gray-400 mb-6 max-w-md leading-relaxed"> ', ' </p> <div class="flex space-x-4"> <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.322-1.233a.582.582 0 01-.023-.156.49.49 0 01.201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.188V8.89c-.135-.01-.269-.03-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.969-.982z"></path> </svg> </a> <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.64 6.8c-.155 1.587-.8 2.426-1.875 3.044 1.091-.132 2.053-.554 2.718-1.28.713-.794 1.113-1.793 1.113-2.918-.002-2.175-1.76-3.935-3.956-3.935-2.088 0-3.874 1.615-3.958 3.69-.083 2.107 1.615 3.872 3.712 3.957 2.222.089 3.956-1.662 3.956-3.88zm-7.28 0c-.155 1.587-.8 2.426-1.874 3.044 1.09-.132 2.052-.554 2.717-1.28.714-.794 1.113-1.793 1.113-2.918-.002-2.175-1.76-3.935-3.956-3.935-2.087 0-3.874 1.615-3.957 3.69-.084 2.107 1.614 3.872 3.712 3.957 2.222.089 3.956-1.662 3.956-3.88z"></path> </svg> </a> </div> </div> <div> <h3 class="text-lg font-bold mb-6">\u670D\u52A1\u9879\u76EE</h3> <ul class="space-y-3"> <li><a href="/services/jia-zheng-fu-wu" class="text-gray-400 hover:text-white transition-colors duration-300">\u5BB6\u653F\u670D\u52A1</a></li> <li><a href="/services/shui-dian-wei-xiu" class="text-gray-400 hover:text-white transition-colors duration-300">\u6C34\u7535\u7EF4\u4FEE</a></li> <li><a href="/services/ju-bu-gai-zao" class="text-gray-400 hover:text-white transition-colors duration-300">\u5C40\u90E8\u6539\u9020</a></li> <li><a href="/services/shi-lao-hua-gai-zao" class="text-gray-400 hover:text-white transition-colors duration-300">\u9002\u8001\u5316\u6539\u9020</a></li> <li><a href="/services/smart-home" class="text-gray-400 hover:text-white transition-colors duration-300">\u667A\u80FD\u5BB6\u5C45</a></li> </ul> </div> <div> <h3 class="text-lg font-bold mb-6">\u8054\u7CFB\u6211\u4EEC</h3> <ul class="space-y-4"> ', " ", " ", ` </ul> </div> </div> <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm"> <p>&copy; 2026 \u94A7\u6CFD\u5B89\u5C45. \u4FDD\u7559\u6240\u6709\u6743\u5229.</p> </div> </div> <script>
    // Dynamic update from API (fallback for when business data changes without redeploy)
    (function() {
      fetch('/api/business')
        .then(function(r) { return r.json(); })
        .then(function(data) {
          if (data) {
            if (data.telephone) {
              var el = document.getElementById('footerPhone');
              if (el) el.textContent = data.telephone;
            }
            if (data.address) {
              var el = document.getElementById('footerAddress');
              if (el) el.textContent = data.address;
            }
            if (data.wechat) {
              var el = document.getElementById('footerWechat');
              if (el) el.textContent = data.wechat;
            }
          }
        })
        .catch(function() {});
    })();
  <\/script> </footer>`])), maybeRenderHead(), b.name || "\u94A7\u6CFD\u5B89\u5C45", b.description || "\u94A7\u6CFD\u5B89\u5C45\u81F4\u529B\u4E8E\u4E3A\u5E73\u9876\u5C71\u5E02\u6C11\u63D0\u4F9B\u4F18\u8D28\u3001\u4E13\u4E1A\u3001\u4FBF\u6377\u7684\u5BB6\u5C45\u670D\u52A1\uFF0C\u6DB5\u76D6\u5BB6\u653F\u4FDD\u6D01\u3001\u6C34\u7535\u7EF4\u4FEE\u3001\u9002\u8001\u5316\u6539\u9020\u3001\u667A\u80FD\u5BB6\u5C45\u7B49\u4E03\u5927\u6838\u5FC3\u4E1A\u52A1\u3002", telephone && renderTemplate`<li class="flex items-start space-x-3 text-gray-400"> <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span id="footerPhone">${telephone}</span> </li>`, address && renderTemplate`<li class="flex items-start space-x-3 text-gray-400"> <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <span id="footerAddress">${address}</span> </li>`, wechat && renderTemplate`<li class="flex items-start space-x-3 text-gray-400"> <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <span id="footerWechat">${wechat}</span> </li>`);
}, "E:/code/junze/junze/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://junze-anju.pages.dev");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const business = Astro2.props.business || {};
  return renderTemplate`<html lang="zh-CN"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(Astro2.props.description || "\u94A7\u6CFD\u5B89\u5C45 - \u6CB3\u5357\u5E73\u9876\u5C71\u4E00\u7AD9\u5F0F\u5BB6\u5C45\u670D\u52A1\u5E73\u53F0", "content")}><meta name="keywords"${addAttribute(Astro2.props.keywords || "\u5E73\u9876\u5C71\u5BB6\u653F\u670D\u52A1,\u5E73\u9876\u5C71\u6C34\u7535\u7EF4\u4FEE,\u5E73\u9876\u5C71\u9002\u8001\u5316\u6539\u9020,\u667A\u80FD\u5BB6\u5C45,\u623F\u5C4B\u68C0\u6D4B", "content")}><title>${Astro2.props.title || "\u94A7\u6CFD\u5B89\u5C45 - \u6CB3\u5357\u5E73\u9876\u5C71\u4E00\u7AD9\u5F0F\u5BB6\u5C45\u670D\u52A1\u5E73\u53F0"}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap" rel="stylesheet">${renderSlot($$result, $$slots["head"])}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, { "business": business })} <main class="min-h-screen"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "business": business })} </body></html>`;
}, "E:/code/junze/junze/src/layouts/Layout.astro", void 0);

/**
 * Database utility for SSR pages
 * In SSR mode, env is available via Astro.locals or getServerContext
 */
function getDb(env) {
  return env.DB;
}

async function getAllServices(env) {
  const db = getDb(env);
  const results = await db.prepare('SELECT * FROM services ORDER BY sort_order ASC').all();
  return results.results.map(r => {
    try { r.process = JSON.parse(r.process); } catch(e) { r.process = []; }
    return r;
  });
}

async function getServiceBySlug(env, slug) {
  const db = getDb(env);
  const result = await db.prepare('SELECT * FROM services WHERE slug = ?').bind(slug).first();
  if (result) {
    try { result.process = JSON.parse(result.process); } catch(e) { result.process = []; }
  }
  return result;
}

async function getAllCases(env) {
  const db = getDb(env);
  const results = await db.prepare('SELECT * FROM cases ORDER BY id DESC').all();
  return results.results;
}

async function getAllFaq(env) {
  const db = getDb(env);
  const results = await db.prepare('SELECT * FROM faq ORDER BY sort_order ASC').all();
  return results.results;
}

async function getBusinessInfo(env) {
  const db = getDb(env);
  const result = await db.prepare('SELECT * FROM business_info WHERE id = 1').first();
  if (result && result.service_areas) {
    try { result.service_areas = JSON.parse(result.service_areas); } catch(e) { result.service_areas = []; }
  }
  return result;
}

async function getAllServiceUpdateCategories(env) {
  const db = getDb(env);
  const results = await db.prepare('SELECT * FROM service_update_categories ORDER BY sort_order ASC').all();
  return results.results;
}

async function getAllServiceUpdates(env, categoryId) {
  const db = getDb(env);
  let query = `SELECT su.*, suc.name as category_name
               FROM service_updates su
               LEFT JOIN service_update_categories suc ON su.category_id = suc.id
               ORDER BY su.publish_date DESC, su.sort_order ASC`;
  const params = [];
  const results = await db.prepare(query).bind(...params).all();
  return results.results;
}

export { $$Layout as $, getAllCases as a, getAllFaq as b, getServiceBySlug as c, getAllServices as d, getAllServiceUpdateCategories as e, getAllServiceUpdates as f, getBusinessInfo as g };
