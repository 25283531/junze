import { c as createAstro, a as createComponent, f as renderComponent, d as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_BiXOaMPZ.mjs';
import 'kleur/colors';
import { d as getAllServices, g as getBusinessInfo, $ as $$Layout } from '../chunks/db_jj7ZzpNN.mjs';
import { $ as $$ServiceCard } from '../chunks/ServiceCard_3VlncOzj.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://junze-anju.pages.dev");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const env = Astro2.locals.env;
  const services = await getAllServices(env);
  const business = await getBusinessInfo(env);
  const telephone = business?.telephone || "0375-8888888";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u670D\u52A1\u9879\u76EE - \u94A7\u6CFD\u5B89\u5C45", "description": "\u94A7\u6CFD\u5B89\u5C45\u63D0\u4F9B\u5BB6\u653F\u670D\u52A1\u3001\u6C34\u7535\u7EF4\u4FEE\u3001\u5C40\u90E8\u6539\u9020\u3001\u9002\u8001\u5316\u6539\u9020\u3001\u667A\u80FD\u5BB6\u5C45\u3001\u623F\u5C4B\u68C0\u6D4B\u3001\u4FDD\u6D01\u6E05\u6D17\u7B49\u4E03\u5927\u6838\u5FC3\u4E1A\u52A1", "keywords": "\u5E73\u9876\u5C71\u5BB6\u653F\u670D\u52A1,\u5E73\u9876\u5C71\u6C34\u7535\u7EF4\u4FEE,\u5E73\u9876\u5C71\u9002\u8001\u5316\u6539\u9020,\u667A\u80FD\u5BB6\u5C45,\u623F\u5C4B\u68C0\u6D4B,\u4FDD\u6D01\u6E05\u6D17" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-gray-50 py-8"> <div class="max-w-6xl mx-auto px-4"> <nav class="flex items-center space-x-2 text-gray-500"> <a href="/" class="hover:text-primary transition-colors">首页</a> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> <span class="text-gray-900 font-medium">服务项目</span> </nav> </div> </section> <section class="py-16 px-4"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-14"> <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">七大核心业务</h1> <p class="text-gray-500 text-lg">专业团队，用心服务，满足您的各类家居需求</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${services.map((service) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "key": service.id, "service": service })}`)} </div> </div> </section> <section class="py-20 px-4 bg-gradient-to-br from-primary/5 to-primary/10"> <div class="max-w-4xl mx-auto text-center"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">立即预约服务</h2> <p class="text-gray-500 text-lg mb-10">拨打服务热线或添加微信，我们将在24小时内与您联系</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a${addAttribute(`tel:${telephone}`, "href")} class="inline-flex items-center justify-center bg-primary text-white font-semibold px-10 py-4 rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl"> <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span class="text-lg">${telephone}</span> </a> <a href="#" class="inline-flex items-center justify-center border-2 border-primary text-primary font-semibold px-10 py-4 rounded-xl hover:bg-primary hover:text-white transition-all duration-300">
添加微信咨询
</a> </div> </div> </section> ` })}`;
}, "E:/code/junze/junze/src/pages/services/index.astro", void 0);

const $$file = "E:/code/junze/junze/src/pages/services/index.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
