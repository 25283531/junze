import { c as createAstro, a as createComponent, f as renderComponent, d as renderTemplate, e as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_BiXOaMPZ.mjs';
import 'kleur/colors';
import { b as getAllFaq, g as getBusinessInfo, $ as $$Layout } from '../chunks/db_CLxGqkqd.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://junze-anju.pages.dev");
const $$Faq = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Faq;
  const env = Astro2.locals.runtime.env;
  const faqs = await getAllFaq(env);
  const business = await getBusinessInfo(env);
  const telephone = business?.telephone || "0375-8888888";
  const categories = [...new Set(faqs.map((f) => f.category).filter(Boolean))];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u5E38\u89C1\u95EE\u9898 - \u94A7\u6CFD\u5B89\u5C45", "description": "\u94A7\u6CFD\u5B89\u5C45\u5E38\u89C1\u95EE\u9898\u89E3\u7B54\uFF0C\u6DB5\u76D6\u9002\u8001\u5316\u6539\u9020\u3001\u6C34\u7535\u7EF4\u4FEE\u3001\u5BB6\u653F\u670D\u52A1\u3001\u667A\u80FD\u5BB6\u5C45\u7B49\u670D\u52A1\u76F8\u5173\u95EE\u9898", "keywords": "\u5E73\u9876\u5C71\u5BB6\u5C45\u670D\u52A1\u5E38\u89C1\u95EE\u9898,\u9002\u8001\u5316\u6539\u9020\u95EE\u7B54,\u6C34\u7535\u7EF4\u4FEE\u95EE\u7B54" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">\n    {\n      "@context": "https://schema.org",\n      "@type": "FAQPage",\n      "mainEntity": {faqs.slice(0, 5).map(faq => ({\n        "@type": "Question",\n        "name": faq.question,\n        "acceptedAnswer": {\n          "@type": "Answer",\n          "text": faq.answer\n        }\n      }))}\n    }\n  <\/script> ', '<section class="bg-gray-50 py-8"> <div class="max-w-6xl mx-auto px-4"> <nav class="flex items-center space-x-2 text-gray-500"> <a href="/" class="hover:text-primary transition-colors">\u9996\u9875</a> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> <span class="text-gray-900 font-medium">\u5E38\u89C1\u95EE\u9898</span> </nav> </div> </section> <section class="py-16 px-4"> <div class="max-w-4xl mx-auto"> <div class="text-center mb-14"> <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">\u5E38\u89C1\u95EE\u9898\u89E3\u7B54</h1> <p class="text-gray-500 text-lg">\u4EE5\u4E0B\u662F\u5BA2\u6237\u7ECF\u5E38\u54A8\u8BE2\u7684\u95EE\u9898\uFF0C\u5982\u679C\u6CA1\u6709\u627E\u5230\u60A8\u9700\u8981\u7684\u7B54\u6848\uFF0C\u8BF7\u968F\u65F6\u8054\u7CFB\u6211\u4EEC</p> </div> <div class="flex flex-wrap justify-center gap-3 mb-10" id="faq-filters"> <button class="faq-filter-btn bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-md" data-category="all">\n\u5168\u90E8\n</button> ', ' </div> <div class="space-y-4" id="faq-list"> ', ' </div> </div> </section> <section class="py-20 px-4 bg-gradient-to-br from-primary/5 to-primary/10"> <div class="max-w-4xl mx-auto text-center"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">\u6CA1\u6709\u627E\u5230\u60A8\u9700\u8981\u7684\u7B54\u6848\uFF1F</h2> <p class="text-gray-500 text-lg mb-10">\u8BF7\u968F\u65F6\u8054\u7CFB\u6211\u4EEC\uFF0C\u6211\u4EEC\u5C06\u4E3A\u60A8\u89E3\u7B54\u4EFB\u4F55\u95EE\u9898</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a', ' class="inline-flex items-center justify-center bg-primary text-white font-semibold px-10 py-4 rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl"> <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span class="text-lg">', `</span> </a> <a href="#" class="inline-flex items-center justify-center border-2 border-primary text-primary font-semibold px-10 py-4 rounded-xl hover:bg-primary hover:text-white transition-all duration-300">
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
  <\/script> `])), maybeRenderHead(), categories.map((category) => renderTemplate`<button${addAttribute(category, "key")} class="faq-filter-btn bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"${addAttribute(category, "data-category")}> ${category} </button>`), faqs.map((faq) => renderTemplate`<div${addAttribute(faq.id, "key")} class="faq-item bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-md"${addAttribute(faq.category, "data-category")}> <button class="faq-toggle w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"> <span class="font-semibold text-gray-900 text-lg">${faq.question}</span> <svg class="faq-icon w-5 h-5 text-gray-400 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <div class="faq-answer hidden px-6 pb-5"> <div class="pl-4 border-l-2 border-primary/30"> <p class="text-gray-600 leading-relaxed text-lg">${faq.answer}</p> </div> </div> </div>`), addAttribute(`tel:${telephone}`, "href"), telephone) })}`;
}, "E:/code/junze/junze/src/pages/faq.astro", void 0);

const $$file = "E:/code/junze/junze/src/pages/faq.astro";
const $$url = "/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faq,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
