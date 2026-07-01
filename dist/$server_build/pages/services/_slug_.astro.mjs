import { c as createAstro, a as createComponent, f as renderComponent, d as renderTemplate, e as addAttribute, m as maybeRenderHead } from '../../chunks/astro/server_DkHii4NB.mjs';
import 'kleur/colors';
import { c as getServiceBySlug, g as getBusinessInfo, $ as $$Layout } from '../../chunks/db_D0_acqJD.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://junze-anju.pages.dev");
async function getStaticPaths() {
  return [];
}
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const env = Astro2.locals;
  const { slug } = Astro2.params;
  const service = await getServiceBySlug(env, slug);
  if (!service) {
    return Astro2.redirect("/services");
  }
  const business = await getBusinessInfo(env);
  const telephone = business?.telephone || "";
  const iconPaths = {
    Home: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    Wrench: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    Hammer: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
    Heart: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    Cpu: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    Search: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7",
    Sparkles: "M13 10V3L4 14h7v7l9-11h-7z"
  };
  const processSteps = Array.isArray(service.process) ? service.process : [];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${service.title} - \u94A7\u6CFD\u5B89\u5C45`, "description": service.description, "keywords": `\u5E73\u9876\u5C71${service.title}` }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([` <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": {service.title},
      "provider": {
        "@type": "LocalBusiness",
        "name": {business?.name || '\u94A7\u6CFD\u5B89\u5C45'},
        "telephone": {telephone},
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "\u5E73\u9876\u5C71",
          "addressRegion": "\u6CB3\u5357"
        }
      },
      "description": {service.description},
      "areaServed": {JSON.stringify(business?.service_areas || [])}
    }
  <\/script> `, '<section class="bg-gray-50 py-8"> <div class="max-w-6xl mx-auto px-4"> <nav class="flex items-center space-x-2 text-gray-500"> <a href="/" class="hover:text-primary transition-colors">\u9996\u9875</a> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> <a href="/services" class="hover:text-primary transition-colors">\u670D\u52A1\u9879\u76EE</a> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> <span class="text-gray-900 font-medium">', '</span> </nav> </div> </section> <section class="py-16 px-4"> <div class="max-w-6xl mx-auto"> <div class="flex flex-col lg:flex-row gap-10"> <div class="flex-1"> <div class="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8"> <div class="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0"> <svg class="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"', '></path> </svg> </div> <div> <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">', '</h1> <p class="text-gray-500 text-lg">', '</p> </div> </div> <div class="bg-white rounded-2xl shadow-sm p-8 mb-8 border border-gray-100"> <h2 class="text-xl font-bold text-gray-900 mb-6 flex items-center"> <span class="w-1 h-6 bg-primary rounded-full mr-3"></span>\n\u670D\u52A1\u4ECB\u7ECD\n</h2> <div class="space-y-6"> <p class="text-gray-600 leading-relaxed text-lg">', '</p> </div> </div> <div class="bg-white rounded-2xl shadow-sm p-8 mb-8 border border-gray-100"> <h2 class="text-xl font-bold text-gray-900 mb-6 flex items-center"> <span class="w-1 h-6 bg-secondary rounded-full mr-3"></span>\n\u6536\u8D39\u6807\u51C6\n</h2> <div class="flex items-start space-x-4"> <div class="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0"> <svg class="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div> <p class="text-gray-900 font-semibold text-lg">', '</p> <p class="text-gray-500 mt-1">\u6240\u6709\u670D\u52A1\u4EF7\u683C\u900F\u660E\u516C\u5F00\uFF0C\u65E0\u9690\u85CF\u6536\u8D39\uFF0C\u670D\u52A1\u524D\u63D0\u4F9B\u8BE6\u7EC6\u62A5\u4EF7</p> </div> </div> </div> <div class="bg-white rounded-2xl shadow-sm p-8 border border-gray-100"> <h2 class="text-xl font-bold text-gray-900 mb-8 flex items-center"> <span class="w-1 h-6 bg-accent rounded-full mr-3"></span>\n\u670D\u52A1\u6D41\u7A0B\n</h2> <div class="relative"> <div class="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200"></div> <div class="grid grid-cols-1 md:grid-cols-5 gap-6"> ', ' </div> </div> </div> </div> <div class="w-full lg:w-80"> <div class="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white sticky top-24"> <h3 class="text-xl font-bold mb-2">\u7ACB\u5373\u9884\u7EA6</h3> <p class="text-white/80 mb-8">\u6211\u4EEC\u5C06\u572824\u5C0F\u65F6\u5185\u4E0E\u60A8\u8054\u7CFB</p> <a', ' class="block bg-white text-primary font-semibold text-center py-4 rounded-xl hover:bg-gray-100 transition-colors mb-4 text-lg"> ', ' </a> <a href="#" class="block border-2 border-white text-white font-semibold text-center py-4 rounded-xl hover:bg-white/10 transition-colors">\n\u6DFB\u52A0\u5FAE\u4FE1\u54A8\u8BE2\n</a> <div class="mt-8 pt-8 border-t border-white/20"> <p class="text-white/60 text-sm mb-2">\u670D\u52A1\u65F6\u95F4</p> <p class="font-medium">24\u5C0F\u65F6\u5168\u5929\u5019\u670D\u52A1</p> </div> </div> </div> </div> </div> </section> '])), maybeRenderHead(), service.title, addAttribute(iconPaths[service.icon], "d"), service.title, service.description, service.content, service.price_range, processSteps.map((step, index) => renderTemplate`<div${addAttribute(index, "key")} class="relative text-center"> <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10"> <span class="text-primary font-bold text-xl">${index + 1}</span> </div> <span class="text-gray-700 font-semibold">${step}</span> </div>`), addAttribute(`tel:${telephone}`, "href"), telephone) })}`;
}, "E:/code/junze/junze/src/pages/services/[slug].astro", void 0);

const $$file = "E:/code/junze/junze/src/pages/services/[slug].astro";
const $$url = "/services/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
