import { a as createComponent, f as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BiXOaMPZ.mjs';
import 'kleur/colors';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_Di-T1vgV.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Faq = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "FAQ\u7BA1\u7406" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", `<div class="bg-white rounded-xl shadow-sm p-6"> <div class="flex items-center justify-between mb-6"> <h2 class="text-xl font-semibold">FAQ\u5217\u8868</h2> <button onclick="openModal()" class="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
\u6DFB\u52A0FAQ
</button> </div> <div class="overflow-x-auto"> <table class="w-full"> <thead> <tr class="bg-gray-50"> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">ID</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u95EE\u9898</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u6392\u5E8F</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u64CD\u4F5C</th> </tr> </thead> <tbody id="faqTable"></tbody> </table> </div> </div> <div id="modal" class="fixed inset-0 bg-black/50 hidden items-center justify-center z-50 p-4"> <div class="bg-white rounded-xl shadow-xl p-6 w-full max-w-lg"> <div class="flex items-center justify-between mb-6"> <h3 class="text-xl font-semibold" id="modalTitle">\u6DFB\u52A0FAQ</h3> <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <form id="faqForm" class="space-y-4"> <input type="hidden" id="faqId"> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u95EE\u9898</label> <input type="text" id="faqQuestion" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u56DE\u7B54</label> <textarea id="faqAnswer" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows="5"></textarea> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u5206\u7C7B</label> <input type="text" id="faqCategory" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="\u5982\uFF1A\u5BB6\u653F\u670D\u52A1\u3001\u6C34\u7535\u7EF4\u4FEE"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u6392\u5E8F</label> <input type="number" id="faqSort" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div class="flex justify-end space-x-4 pt-4"> <button type="button" onclick="closeModal()" class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">\u53D6\u6D88</button> <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">\u4FDD\u5B58</button> </div> </form> </div> </div> <script>
    async function loadFaq() {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/admin/faq', {
        headers: { 'Authorization': \`Bearer \${token}\` }
      });
      const faq = await response.json();
      const table = document.getElementById('faqTable');
      table.innerHTML = faq.map(item => \`
        <tr class="border-b border-gray-100">
          <td class="px-4 py-3">\${item.id}</td>
          <td class="px-4 py-3 max-w-xs truncate">\${item.question}</td>
          <td class="px-4 py-3">\${item.sort_order}</td>
          <td class="px-4 py-3">
            <button onclick="editFaq(\${item.id})" class="text-blue-600 hover:text-blue-700 mr-4">\u7F16\u8F91</button>
            <button onclick="deleteFaq(\${item.id})" class="text-red-500 hover:text-red-700">\u5220\u9664</button>
          </td>
        </tr>
      \`).join('');
    }
    
    function openModal() {
      document.getElementById('modal').classList.remove('hidden');
      document.getElementById('modal').classList.add('flex');
      document.getElementById('modalTitle').textContent = '\u6DFB\u52A0FAQ';
      document.getElementById('faqForm').reset();
      document.getElementById('faqId').value = '';
    }
    
    function closeModal() {
      document.getElementById('modal').classList.add('hidden');
      document.getElementById('modal').classList.remove('flex');
    }
    
    async function editFaq(id) {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/admin/faq', {
        headers: { 'Authorization': \`Bearer \${token}\` }
      });
      const faq = await response.json();
      const item = faq.find(f => f.id === id);
      if (item) {
        document.getElementById('modalTitle').textContent = '\u7F16\u8F91FAQ';
        document.getElementById('faqId').value = item.id;
        document.getElementById('faqQuestion').value = item.question;
        document.getElementById('faqAnswer').value = item.answer;
        document.getElementById('faqCategory').value = item.category || '';
        document.getElementById('faqSort').value = item.sort_order;
        document.getElementById('modal').classList.remove('hidden');
        document.getElementById('modal').classList.add('flex');
      }
    }
    
    async function deleteFaq(id) {
      if (confirm('\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2AFAQ\u5417\uFF1F')) {
        const token = localStorage.getItem('token');
        await fetch(\`/api/admin/faq?id=\${id}\`, {
          method: 'DELETE',
          headers: { 'Authorization': \`Bearer \${token}\` }
        });
        loadFaq();
      }
    }
    
    document.getElementById('faqForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const id = document.getElementById('faqId').value;
      const data = {
        question: document.getElementById('faqQuestion').value,
        answer: document.getElementById('faqAnswer').value,
        category: document.getElementById('faqCategory').value,
        sort_order: parseInt(document.getElementById('faqSort').value) || 0
      };
      
      if (id) {
        data.id = parseInt(id);
        await fetch('/api/admin/faq', {
          method: 'PUT',
          headers: { 'Authorization': \`Bearer \${token}\`, 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      } else {
        await fetch('/api/admin/faq', {
          method: 'POST',
          headers: { 'Authorization': \`Bearer \${token}\`, 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      }
      
      closeModal();
      loadFaq();
    });
    
    loadFaq();
  <\/script> `], [" ", `<div class="bg-white rounded-xl shadow-sm p-6"> <div class="flex items-center justify-between mb-6"> <h2 class="text-xl font-semibold">FAQ\u5217\u8868</h2> <button onclick="openModal()" class="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
\u6DFB\u52A0FAQ
</button> </div> <div class="overflow-x-auto"> <table class="w-full"> <thead> <tr class="bg-gray-50"> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">ID</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u95EE\u9898</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u6392\u5E8F</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u64CD\u4F5C</th> </tr> </thead> <tbody id="faqTable"></tbody> </table> </div> </div> <div id="modal" class="fixed inset-0 bg-black/50 hidden items-center justify-center z-50 p-4"> <div class="bg-white rounded-xl shadow-xl p-6 w-full max-w-lg"> <div class="flex items-center justify-between mb-6"> <h3 class="text-xl font-semibold" id="modalTitle">\u6DFB\u52A0FAQ</h3> <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <form id="faqForm" class="space-y-4"> <input type="hidden" id="faqId"> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u95EE\u9898</label> <input type="text" id="faqQuestion" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u56DE\u7B54</label> <textarea id="faqAnswer" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows="5"></textarea> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u5206\u7C7B</label> <input type="text" id="faqCategory" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="\u5982\uFF1A\u5BB6\u653F\u670D\u52A1\u3001\u6C34\u7535\u7EF4\u4FEE"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u6392\u5E8F</label> <input type="number" id="faqSort" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div class="flex justify-end space-x-4 pt-4"> <button type="button" onclick="closeModal()" class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">\u53D6\u6D88</button> <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">\u4FDD\u5B58</button> </div> </form> </div> </div> <script>
    async function loadFaq() {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/admin/faq', {
        headers: { 'Authorization': \\\`Bearer \\\${token}\\\` }
      });
      const faq = await response.json();
      const table = document.getElementById('faqTable');
      table.innerHTML = faq.map(item => \\\`
        <tr class="border-b border-gray-100">
          <td class="px-4 py-3">\\\${item.id}</td>
          <td class="px-4 py-3 max-w-xs truncate">\\\${item.question}</td>
          <td class="px-4 py-3">\\\${item.sort_order}</td>
          <td class="px-4 py-3">
            <button onclick="editFaq(\\\${item.id})" class="text-blue-600 hover:text-blue-700 mr-4">\u7F16\u8F91</button>
            <button onclick="deleteFaq(\\\${item.id})" class="text-red-500 hover:text-red-700">\u5220\u9664</button>
          </td>
        </tr>
      \\\`).join('');
    }
    
    function openModal() {
      document.getElementById('modal').classList.remove('hidden');
      document.getElementById('modal').classList.add('flex');
      document.getElementById('modalTitle').textContent = '\u6DFB\u52A0FAQ';
      document.getElementById('faqForm').reset();
      document.getElementById('faqId').value = '';
    }
    
    function closeModal() {
      document.getElementById('modal').classList.add('hidden');
      document.getElementById('modal').classList.remove('flex');
    }
    
    async function editFaq(id) {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/admin/faq', {
        headers: { 'Authorization': \\\`Bearer \\\${token}\\\` }
      });
      const faq = await response.json();
      const item = faq.find(f => f.id === id);
      if (item) {
        document.getElementById('modalTitle').textContent = '\u7F16\u8F91FAQ';
        document.getElementById('faqId').value = item.id;
        document.getElementById('faqQuestion').value = item.question;
        document.getElementById('faqAnswer').value = item.answer;
        document.getElementById('faqCategory').value = item.category || '';
        document.getElementById('faqSort').value = item.sort_order;
        document.getElementById('modal').classList.remove('hidden');
        document.getElementById('modal').classList.add('flex');
      }
    }
    
    async function deleteFaq(id) {
      if (confirm('\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2AFAQ\u5417\uFF1F')) {
        const token = localStorage.getItem('token');
        await fetch(\\\`/api/admin/faq?id=\\\${id}\\\`, {
          method: 'DELETE',
          headers: { 'Authorization': \\\`Bearer \\\${token}\\\` }
        });
        loadFaq();
      }
    }
    
    document.getElementById('faqForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const id = document.getElementById('faqId').value;
      const data = {
        question: document.getElementById('faqQuestion').value,
        answer: document.getElementById('faqAnswer').value,
        category: document.getElementById('faqCategory').value,
        sort_order: parseInt(document.getElementById('faqSort').value) || 0
      };
      
      if (id) {
        data.id = parseInt(id);
        await fetch('/api/admin/faq', {
          method: 'PUT',
          headers: { 'Authorization': \\\`Bearer \\\${token}\\\`, 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      } else {
        await fetch('/api/admin/faq', {
          method: 'POST',
          headers: { 'Authorization': \\\`Bearer \\\${token}\\\`, 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      }
      
      closeModal();
      loadFaq();
    });
    
    loadFaq();
  <\/script> `])), maybeRenderHead()) })}`;
}, "E:/code/junze/junze/src/pages/admin/faq.astro", void 0);

const $$file = "E:/code/junze/junze/src/pages/admin/faq.astro";
const $$url = "/admin/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faq,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
