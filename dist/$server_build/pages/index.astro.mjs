import { c as createAstro, a as createComponent, d as renderTemplate, u as unescapeHTML, f as renderComponent, e as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_DkHii4NB.mjs';
import 'kleur/colors';
import { d as getAllServices, a as getAllCases, b as getAllFaq, g as getBusinessInfo, $ as $$Layout } from '../chunks/db_D0_acqJD.mjs';
import 'clsx';
import { $ as $$ServiceCard } from '../chunks/ServiceCard_D8Ss1OZl.mjs';
export { renderers } from '../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://junze-anju.pages.dev");
const $$JsonLd = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$JsonLd;
  const b = Astro2.props.business || {};
  const name = b.name || "\u94A7\u6CFD\u5B89\u5C45";
  const description = b.description || "\u6CB3\u5357\u5E73\u9876\u5C71\u672C\u5730\u4E13\u4E1A\u7684\u5BB6\u653F\u3001\u6C34\u7535\u7EF4\u4FEE\u3001\u9002\u8001\u5316\u4E0E\u667A\u80FD\u5BB6\u5C45\u6539\u9020\u670D\u52A1\u5546";
  const telephone = b.telephone || "";
  const address = b.address || "";
  const serviceAreas = b.service_areas || ["\u6E5B\u6CB3\u533A", "\u536B\u4E1C\u533A", "\u65B0\u534E\u533A", "\u77F3\u9F99\u533A", "\u821E\u94A2\u5E02", "\u6C5D\u5DDE\u5E02", "\u90CF\u53BF", "\u5B9D\u4E30\u53BF", "\u9C81\u5C71\u53BF"];
  const services = b.services || [
    { "@type": "Service", "name": "\u5BB6\u653F\u670D\u52A1" },
    { "@type": "Service", "name": "\u6C34\u7535\u7EF4\u4FEE" },
    { "@type": "Service", "name": "\u5C40\u90E8\u6539\u9020" },
    { "@type": "Service", "name": "\u9002\u8001\u5316\u6539\u9020" },
    { "@type": "Service", "name": "\u667A\u80FD\u5BB6\u5C45" },
    { "@type": "Service", "name": "\u623F\u5C4B\u68C0\u6D4B" },
    { "@type": "Service", "name": "\u4FDD\u6D01\u6E05\u6D17" }
  ];
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "description": description,
    "areaServed": serviceAreas,
    "telephone": telephone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address,
      "addressLocality": "\u5E73\u9876\u5C71",
      "addressRegion": "\u6CB3\u5357"
    },
    "service": services
  })));
}, "E:/code/junze/junze/src/components/JsonLd.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://junze-anju.pages.dev");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const env = Astro2.locals;
  const services = await getAllServices(env);
  const cases = await getAllCases(env);
  const faqs = await getAllFaq(env);
  const business = await getBusinessInfo(env);
  const serviceAreas = business?.service_areas || [];
  const categories = [...new Set(faqs.map((f) => f.category).filter(Boolean))];
  const telephone = business?.telephone || "";
  const heroTitle = business?.name || "\u94A7\u6CFD\u5B89\u5C45";
  const heroDesc = business?.description || "\u4E13\u4E1A\u63D0\u4F9B\u5BB6\u653F\u670D\u52A1\u3001\u6C34\u7535\u7EF4\u4FEE\u3001\u9002\u8001\u5316\u6539\u9020\u3001\u667A\u80FD\u5BB6\u5C45\u7B49\u4E03\u5927\u6838\u5FC3\u4E1A\u52A1\uFF0C\u4E3A\u5E73\u9876\u5C71\u5E02\u6C11\u6253\u9020\u8212\u9002\u3001\u5B89\u5168\u3001\u667A\u6167\u7684\u5BB6\u5C45\u751F\u6D3B";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${heroTitle} - \u6CB3\u5357\u5E73\u9876\u5C71\u4E00\u7AD9\u5F0F\u5BB6\u5C45\u670D\u52A1\u5E73\u53F0`, "description": heroDesc, "keywords": "\u5E73\u9876\u5C71\u5BB6\u653F\u670D\u52A1,\u5E73\u9876\u5C71\u6C34\u7535\u7EF4\u4FEE,\u5E73\u9876\u5C71\u9002\u8001\u5316\u6539\u9020,\u667A\u80FD\u5BB6\u5C45,\u623F\u5C4B\u68C0\u6D4B,\u4FDD\u6D01\u6E05\u6D17", "business": business }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", "  ", '<section class="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-blue-800 text-white py-24 px-4"> <div class="absolute inset-0 opacity-10"> <div class="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div> <div class="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div> </div> <div class="relative max-w-6xl mx-auto text-center"> <div class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8"> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span>\u5E73\u9876\u5C71\u672C\u5730\u4E13\u4E1A\u5BB6\u5C45\u670D\u52A1\u5E73\u53F0</span> </div> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"> ', ' <span class="block text-3xl md:text-4xl lg:text-5xl font-normal mt-2 text-white/90">\u6CB3\u5357\u5E73\u9876\u5C71\u4E00\u7AD9\u5F0F\u5BB6\u5C45\u670D\u52A1\u5E73\u53F0</span> </h1> <p class="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed"> ', ' </p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/services" class="inline-flex items-center justify-center bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">\n\u67E5\u770B\u5168\u90E8\u670D\u52A1\n<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> <a href="/cases" class="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300">\n\u67E5\u770B\u771F\u5B9E\u6848\u4F8B\n</a> </div> </div> </section>  <section class="py-20 px-4 bg-gray-50"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-14"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">\u4E03\u5927\u6838\u5FC3\u4E1A\u52A1</h2> <p class="text-gray-500 text-lg">\u4E13\u4E1A\u56E2\u961F\uFF0C\u7528\u5FC3\u670D\u52A1\uFF0C\u6EE1\u8DB3\u60A8\u7684\u5404\u7C7B\u5BB6\u5C45\u9700\u6C42</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ', ' </div> </div> </section>  <section class="py-20 px-4 bg-white"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-14"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">\u771F\u5B9E\u6848\u4F8B\u4E0E\u672C\u5730\u53E3\u7891</h2> <p class="text-gray-500 text-lg">\u6BCF\u4E00\u4E2A\u6848\u4F8B\u90FD\u662F\u6211\u4EEC\u7528\u5FC3\u670D\u52A1\u7684\u89C1\u8BC1\uFF0C\u6BCF\u4E00\u6761\u8BC4\u4EF7\u90FD\u662F\u5BA2\u6237\u5BF9\u6211\u4EEC\u7684\u8BA4\u53EF</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ', ' </div> <div class="text-center mt-10"> <a href="/cases" class="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors">\n\u67E5\u770B\u66F4\u591A\u6848\u4F8B\n<svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div> </section>  <section class="py-20 px-4 bg-gray-50"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-14"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">\u670D\u52A1\u533A\u57DF</h2> <p class="text-gray-500 text-lg">\u6211\u4EEC\u7684\u670D\u52A1\u8986\u76D6\u5E73\u9876\u5C71\u5168\u5E02\uFF0C\u65E0\u8BBA\u60A8\u5728\u54EA\u4E2A\u533A\u53BF\uFF0C\u90FD\u80FD\u4EAB\u53D7\u4E13\u4E1A\u670D\u52A1</p> </div> <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"> ', ' </div> </div> </section>  <section class="py-20 px-4 bg-white"> <div class="max-w-4xl mx-auto"> <div class="text-center mb-14"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">\u5E38\u89C1\u95EE\u9898\u89E3\u7B54</h2> <p class="text-gray-500 text-lg">\u4EE5\u4E0B\u662F\u5BA2\u6237\u7ECF\u5E38\u54A8\u8BE2\u7684\u95EE\u9898\uFF0C\u5982\u679C\u6CA1\u6709\u627E\u5230\u60A8\u9700\u8981\u7684\u7B54\u6848\uFF0C\u8BF7\u968F\u65F6\u8054\u7CFB\u6211\u4EEC</p> </div> <div class="flex flex-wrap justify-center gap-3 mb-10" id="faq-filters"> <button class="faq-filter-btn bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-md" data-category="all">\u5168\u90E8</button> ', ' </div> <div class="space-y-4" id="faq-list"> ', ' </div> <div class="text-center mt-10"> <a href="/faq" class="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors">\n\u67E5\u770B\u66F4\u591A\u95EE\u9898\n<svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div> </section>  <section class="py-20 px-4 bg-gray-50"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-14"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">\u4E3A\u4EC0\u4E48\u9009\u62E9\u6211\u4EEC</h2> <p class="text-gray-500 text-lg">\u6211\u4EEC\u81F4\u529B\u4E8E\u4E3A\u5E73\u9876\u5C71\u5E02\u6C11\u63D0\u4F9B\u4F18\u8D28\u3001\u4E13\u4E1A\u3001\u4FBF\u6377\u7684\u5BB6\u5C45\u670D\u52A1</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div class="text-center group"> <div class="w-20 h-20 bg-primary/10 group-hover:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300"> <svg class="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> </div> <h3 class="text-xl font-bold text-gray-900 mb-3">\u4E13\u4E1A\u56E2\u961F</h3> <p class="text-gray-500 leading-relaxed">\u62E5\u6709\u7ECF\u9A8C\u4E30\u5BCC\u7684\u4E13\u4E1A\u670D\u52A1\u56E2\u961F\uFF0C\u6240\u6709\u4EBA\u5458\u5747\u7ECF\u8FC7\u4E25\u683C\u57F9\u8BAD\u548C\u8BA4\u8BC1\uFF0C\u786E\u4FDD\u670D\u52A1\u8D28\u91CF</p> </div> <div class="text-center group"> <div class="w-20 h-20 bg-secondary/10 group-hover:bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300"> <svg class="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path> </svg> </div> <h3 class="text-xl font-bold text-gray-900 mb-3">\u900F\u660E\u6536\u8D39</h3> <p class="text-gray-500 leading-relaxed">\u6240\u6709\u670D\u52A1\u4EF7\u683C\u900F\u660E\u516C\u5F00\uFF0C\u65E0\u9690\u85CF\u6536\u8D39\uFF0C\u670D\u52A1\u524D\u63D0\u4F9B\u8BE6\u7EC6\u62A5\u4EF7\uFF0C\u8BA9\u60A8\u5B89\u5FC3\u6D88\u8D39</p> </div> <div class="text-center group"> <div class="w-20 h-20 bg-accent/10 group-hover:bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300"> <svg class="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <h3 class="text-xl font-bold text-gray-900 mb-3">\u5FEB\u901F\u54CD\u5E94</h3> <p class="text-gray-500 leading-relaxed">24\u5C0F\u65F6\u670D\u52A1\u70ED\u7EBF\uFF0C\u5FEB\u901F\u54CD\u5E94\u60A8\u7684\u9700\u6C42\uFF0C\u53CA\u65F6\u5B89\u6392\u4E13\u4E1A\u4EBA\u5458\u4E0A\u95E8\u670D\u52A1</p> </div> </div> </div> </section>  <section class="py-20 px-4 bg-gradient-to-br from-primary/5 to-primary/10"> <div class="max-w-4xl mx-auto text-center"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">\u7ACB\u5373\u9884\u7EA6\u670D\u52A1</h2> <p class="text-gray-500 text-lg mb-10">\u62E8\u6253\u670D\u52A1\u70ED\u7EBF\u6216\u6DFB\u52A0\u5FAE\u4FE1\uFF0C\u6211\u4EEC\u5C06\u572824\u5C0F\u65F6\u5185\u4E0E\u60A8\u8054\u7CFB</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a', ' class="inline-flex items-center justify-center bg-primary text-white font-semibold px-10 py-4 rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl"> <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span class="text-lg">', `</span> </a> <a href="#" class="inline-flex items-center justify-center border-2 border-primary text-primary font-semibold px-10 py-4 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 bg-white">
\u6DFB\u52A0\u5FAE\u4FE1\u54A8\u8BE2
</a> </div> </div> </section> <script>
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.faq-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
          const item = btn.closest('.faq-item');
          const answer = item.querySelector('.faq-answer');
          const icon = item.querySelector('.faq-icon');
          answer.classList.toggle('hidden');
          icon.classList.toggle('rotate-180');
        });
      });

      document.querySelectorAll('.faq-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const category = btn.dataset.category;
          document.querySelectorAll('.faq-filter-btn').forEach(b => {
            b.className = 'faq-filter-btn bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300';
          });
          btn.className = 'faq-filter-btn bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-md';
          document.querySelectorAll('.faq-item').forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          });
        });
      });
    });
  <\/script> `])), renderComponent($$result2, "JsonLd", $$JsonLd, { "business": business }), maybeRenderHead(), heroTitle, heroDesc, services.map((service) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "key": service.id, "service": service })}`), cases.slice(0, 4).map((caseItem) => renderTemplate`<div${addAttribute(caseItem.id, "key")} class="group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"> <div class="bg-gradient-to-r from-primary/5 to-primary/10 px-6 py-4 border-b border-gray-100"> <div class="flex items-center justify-between"> <span class="bg-primary text-white text-sm font-semibold px-4 py-1.5 rounded-full">${caseItem.area}</span> <span class="text-gray-500 text-sm">${caseItem.completion_date}</span> </div> </div> <div class="p-8"> <h3 class="text-xl font-bold text-gray-900 mb-3">${caseItem.title}</h3> <p class="text-gray-500 mb-6">${caseItem.description}</p> <div class="flex items-center space-x-3 mb-6 text-sm text-gray-600"> <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <span>${caseItem.community}</span> </div> <div class="bg-gray-50 rounded-xl p-5 mb-6"> <p class="text-sm text-gray-700"><strong class="text-gray-900 font-medium">服务内容：</strong>${caseItem.service_content}</p> </div> <div class="border-l-4 border-primary pl-5 py-1"> <div class="flex items-start"> <svg class="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"> <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path> </svg> <p class="text-gray-600 italic">${caseItem.review}</p> </div> </div> </div> </div>`), serviceAreas.map((area) => renderTemplate`<div${addAttribute(area, "key")} class="group bg-white rounded-2xl p-6 text-center hover:bg-primary/5 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/10"> <div class="w-14 h-14 bg-primary/10 group-hover:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300"> <svg class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> <span class="text-gray-900 font-semibold text-lg">${area}</span> </div>`), categories.map((category) => renderTemplate`<button${addAttribute(category, "key")} class="faq-filter-btn bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"${addAttribute(category, "data-category")}>${category}</button>`), faqs.map((faq) => renderTemplate`<div${addAttribute(faq.id, "key")} class="faq-item bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-md"${addAttribute(faq.category, "data-category")}> <button class="faq-toggle w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"> <span class="font-semibold text-gray-900 text-lg">${faq.question}</span> <svg class="faq-icon w-5 h-5 text-gray-400 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <div class="faq-answer hidden px-6 pb-5"> <div class="pl-4 border-l-2 border-primary/30"> <p class="text-gray-600 leading-relaxed text-lg">${faq.answer}</p> </div> </div> </div>`), addAttribute(`tel:${telephone}`, "href"), telephone) })}`;
}, "E:/code/junze/junze/src/pages/index.astro", void 0);

const $$file = "E:/code/junze/junze/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
