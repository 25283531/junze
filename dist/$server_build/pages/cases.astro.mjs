import { c as createAstro, a as createComponent, f as renderComponent, d as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_DkHii4NB.mjs';
import 'kleur/colors';
import { a as getAllCases, g as getBusinessInfo, $ as $$Layout } from '../chunks/db_BS4_5DSJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://junze-anju.pages.dev");
const $$Cases = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cases;
  const env = Astro2.locals.runtime.env;
  const cases = await getAllCases(env);
  const business = await getBusinessInfo(env);
  const telephone = business?.telephone || "";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u771F\u5B9E\u6848\u4F8B - \u94A7\u6CFD\u5B89\u5C45", "description": "\u94A7\u6CFD\u5B89\u5C45\u771F\u5B9E\u670D\u52A1\u6848\u4F8B\u5C55\u793A\uFF0C\u6DB5\u76D6\u5E73\u9876\u5C71\u5404\u533A\u53BF\u7684\u9002\u8001\u5316\u6539\u9020\u3001\u6C34\u7535\u7EF4\u4FEE\u3001\u5C40\u90E8\u6539\u9020\u3001\u667A\u80FD\u5BB6\u5C45\u7B49\u670D\u52A1\u6848\u4F8B", "keywords": "\u5E73\u9876\u5C71\u9002\u8001\u5316\u6539\u9020\u6848\u4F8B,\u5E73\u9876\u5C71\u6C34\u7535\u6539\u9020\u6848\u4F8B,\u5E73\u9876\u5C71\u667A\u80FD\u5BB6\u5C45\u6848\u4F8B", "business": business }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-gray-50 py-8"> <div class="max-w-6xl mx-auto px-4"> <nav class="flex items-center space-x-2 text-gray-500"> <a href="/" class="hover:text-primary transition-colors">首页</a> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> <span class="text-gray-900 font-medium">真实案例</span> </nav> </div> </section> <section class="py-16 px-4"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-14"> <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">真实案例与本地口碑</h1> <p class="text-gray-500 text-lg">每一个案例都是我们用心服务的见证，每一条评价都是客户对我们的认可</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${cases.map((caseItem) => renderTemplate`<div${addAttribute(caseItem.id, "key")} class="group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"> <div class="bg-gradient-to-r from-primary/5 to-primary/10 px-6 py-4 border-b border-gray-100"> <div class="flex items-center justify-between"> <span class="bg-primary text-white text-sm font-semibold px-4 py-1.5 rounded-full"> ${caseItem.area} </span> <span class="text-gray-500 text-sm">${caseItem.completion_date}</span> </div> </div> <div class="p-8"> <h3 class="text-xl font-bold text-gray-900 mb-3">${caseItem.title}</h3> <p class="text-gray-500 mb-6">${caseItem.description}</p> <div class="flex items-center space-x-3 mb-6 text-sm text-gray-600"> <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <span>${caseItem.community}</span> </div> <div class="bg-gray-50 rounded-xl p-5 mb-6"> <p class="text-sm text-gray-700"> <strong class="text-gray-900 font-medium">服务内容：</strong>${caseItem.service_content} </p> </div> <div class="border-l-4 border-primary pl-5 py-1"> <div class="flex items-start"> <svg class="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"> <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path> </svg> <p class="text-gray-600 italic">${caseItem.review}</p> </div> </div> </div> </div>`)} </div> </div> </section> <section class="py-20 px-4 bg-gradient-to-br from-primary/5 to-primary/10"> <div class="max-w-4xl mx-auto text-center"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">想了解更多案例？</h2> <p class="text-gray-500 text-lg mb-10">拨打服务热线或添加微信，我们将为您提供更多适合您需求的案例参考</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a${addAttribute(`tel:${telephone}`, "href")} class="inline-flex items-center justify-center bg-primary text-white font-semibold px-10 py-4 rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl"> <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span class="text-lg">${telephone}</span> </a> <a href="#" class="inline-flex items-center justify-center border-2 border-primary text-primary font-semibold px-10 py-4 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 bg-white">
添加微信咨询
</a> </div> </div> </section> ` })}`;
}, "E:/code/junze/junze/src/pages/cases.astro", void 0);

const $$file = "E:/code/junze/junze/src/pages/cases.astro";
const $$url = "/cases";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cases,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
