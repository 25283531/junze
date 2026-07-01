import { c as createAstro, a as createComponent, f as renderComponent, d as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_DkHii4NB.mjs';
import 'kleur/colors';
import { g as getBusinessInfo, e as getAllServiceUpdateCategories, f as getAllServiceUpdates, $ as $$Layout } from '../chunks/db_DGriQWei.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://junze-anju.pages.dev");
const $$Updates = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Updates;
  const env = Astro2.locals;
  const business = await getBusinessInfo(env);
  const categories = await getAllServiceUpdateCategories(env);
  const updates = await getAllServiceUpdates(env);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u670D\u52A1\u52A8\u6001 - \u94A7\u6CFD\u5B89\u5C45", "description": "\u94A7\u6CFD\u5B89\u5C45\u6700\u65B0\u670D\u52A1\u52A8\u6001\uFF0C\u5DE5\u7A0B\u627F\u63A5\u3001\u5DE5\u7A0B\u5B8C\u6210\u3001\u4E1A\u4E3B\u597D\u8BC4\u3001\u65BD\u5DE5\u98CE\u91C7", "keywords": "\u5E73\u9876\u5C71\u5BB6\u5C45\u670D\u52A1\u52A8\u6001,\u94A7\u6CFD\u5B89\u5C45\u5DE5\u7A0B,\u5E73\u9876\u5C71\u88C5\u4FEE\u6848\u4F8B", "business": business }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-gray-50 py-8"> <div class="max-w-6xl mx-auto px-4"> <nav class="flex items-center space-x-2 text-gray-500"> <a href="/" class="hover:text-primary transition-colors">首页</a> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> <span class="text-gray-900 font-medium">服务动态</span> </nav> </div> </section> <section class="py-16 px-4"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-10"> <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">服务动态</h1> <p class="text-gray-500 text-lg">实时记录我们的每一次服务，见证品质与口碑</p> </div> <!-- Category Filter --> <div class="flex flex-wrap justify-center gap-3 mb-12"> <button class="category-filter px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-primary text-white" data-category-id="">全部</button> ${categories.map((cat) => renderTemplate`<button class="category-filter px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-gray-100 text-gray-600 hover:bg-primary hover:text-white"${addAttribute(String(cat.id), "data-category-id")}>${cat.name}</button>`)} </div> <!-- Updates Grid --> <div id="updatesGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${updates.map((update) => renderTemplate`<article${addAttribute(String(update.category_id || ""), "data-category-id")} class="group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"> ${update.image_key && renderTemplate`<div class="aspect-video bg-gray-100 overflow-hidden"> <img${addAttribute(`/api/admin/get-image?key=${update.image_key}`, "src")}${addAttribute(update.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"> </div>`} <div class="p-6"> <div class="flex items-center justify-between mb-3"> ${update.category_name && renderTemplate`<span class="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full"> ${update.category_name} </span>`} ${update.publish_date && renderTemplate`<span class="text-gray-400 text-sm">${update.publish_date}</span>`} </div> <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">${update.title}</h3> ${update.content && renderTemplate`<p class="text-gray-500 text-sm mb-3 line-clamp-3">${update.content}</p>`} ${update.community && renderTemplate`<div class="flex items-center text-sm text-gray-400"> <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> ${update.community} </div>`} </div> </article>`)} </div> <!-- Empty State --> <div id="emptyState" class="hidden text-center py-20"> <svg class="w-20 h-20 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path> </svg> <p class="text-gray-400 text-lg">暂无动态</p> </div> </div> </section>  ` })}`;
}, "E:/code/junze/junze/src/pages/updates.astro", void 0);

const $$file = "E:/code/junze/junze/src/pages/updates.astro";
const $$url = "/updates";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Updates,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
