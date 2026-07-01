import { a as createComponent, f as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DkHii4NB.mjs';
import 'kleur/colors';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_BEFbHsHH.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Cases = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "\u6848\u4F8B\u7BA1\u7406" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", `<div class="bg-white rounded-xl shadow-sm p-6"> <div class="flex items-center justify-between mb-6"> <h2 class="text-xl font-semibold">\u6848\u4F8B\u5217\u8868</h2> <button onclick="openModal()" class="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
\u6DFB\u52A0\u6848\u4F8B
</button> </div> <div class="overflow-x-auto"> <table class="w-full"> <thead> <tr class="bg-gray-50"> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">ID</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u6807\u9898</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u533A\u57DF</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u5C0F\u533A</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u64CD\u4F5C</th> </tr> </thead> <tbody id="casesTable"></tbody> </table> </div> </div> <div id="modal" class="fixed inset-0 bg-black/50 hidden items-center justify-center z-50 p-4"> <div class="bg-white rounded-xl shadow-xl p-6 w-full max-w-lg"> <div class="flex items-center justify-between mb-6"> <h3 class="text-xl font-semibold" id="modalTitle">\u6DFB\u52A0\u6848\u4F8B</h3> <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <form id="caseForm" class="space-y-4"> <input type="hidden" id="caseId"> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u6807\u9898</label> <input type="text" id="caseTitle" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u63CF\u8FF0</label> <input type="text" id="caseDescription" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u533A\u57DF</label> <input type="text" id="caseArea" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u5C0F\u533A</label> <input type="text" id="caseCommunity" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u670D\u52A1\u5185\u5BB9</label> <textarea id="caseServiceContent" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows="3"></textarea> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u5B8C\u6210\u65E5\u671F</label> <input type="date" id="caseCompletionDate" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u5BA2\u6237\u8BC4\u4EF7</label> <textarea id="caseReview" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows="3"></textarea> </div> <div class="flex justify-end space-x-4 pt-4"> <button type="button" onclick="closeModal()" class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">\u53D6\u6D88</button> <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">\u4FDD\u5B58</button> </div> </form> </div> </div> <script>
    async function loadCases() {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/admin/cases', {
        headers: { 'Authorization': \`Bearer \${token}\` }
      });
      const cases = await response.json();
      const table = document.getElementById('casesTable');
      table.innerHTML = cases.map(caseItem => \`
        <tr class="border-b border-gray-100">
          <td class="px-4 py-3">\${caseItem.id}</td>
          <td class="px-4 py-3">\${caseItem.title}</td>
          <td class="px-4 py-3">\${caseItem.area}</td>
          <td class="px-4 py-3">\${caseItem.community}</td>
          <td class="px-4 py-3">
            <button onclick="editCase(\${caseItem.id})" class="text-blue-600 hover:text-blue-700 mr-4">\u7F16\u8F91</button>
            <button onclick="deleteCase(\${caseItem.id})" class="text-red-500 hover:text-red-700">\u5220\u9664</button>
          </td>
        </tr>
      \`).join('');
    }
    
    function openModal() {
      document.getElementById('modal').classList.remove('hidden');
      document.getElementById('modal').classList.add('flex');
      document.getElementById('modalTitle').textContent = '\u6DFB\u52A0\u6848\u4F8B';
      document.getElementById('caseForm').reset();
      document.getElementById('caseId').value = '';
    }
    
    function closeModal() {
      document.getElementById('modal').classList.add('hidden');
      document.getElementById('modal').classList.remove('flex');
    }
    
    async function editCase(id) {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/admin/cases', {
        headers: { 'Authorization': \`Bearer \${token}\` }
      });
      const cases = await response.json();
      const caseItem = cases.find(c => c.id === id);
      if (caseItem) {
        document.getElementById('modalTitle').textContent = '\u7F16\u8F91\u6848\u4F8B';
        document.getElementById('caseId').value = caseItem.id;
        document.getElementById('caseTitle').value = caseItem.title;
        document.getElementById('caseDescription').value = caseItem.description;
        document.getElementById('caseArea').value = caseItem.area;
        document.getElementById('caseCommunity').value = caseItem.community;
        document.getElementById('caseServiceContent').value = caseItem.service_content;
        document.getElementById('caseCompletionDate').value = caseItem.completion_date;
        document.getElementById('caseReview').value = caseItem.review;
        document.getElementById('modal').classList.remove('hidden');
        document.getElementById('modal').classList.add('flex');
      }
    }
    
    async function deleteCase(id) {
      if (confirm('\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u6848\u4F8B\u5417\uFF1F')) {
        const token = localStorage.getItem('token');
        await fetch(\`/api/admin/cases?id=\${id}\`, {
          method: 'DELETE',
          headers: { 'Authorization': \`Bearer \${token}\` }
        });
        loadCases();
      }
    }
    
    document.getElementById('caseForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const id = document.getElementById('caseId').value;
      const data = {
        title: document.getElementById('caseTitle').value,
        description: document.getElementById('caseDescription').value,
        area: document.getElementById('caseArea').value,
        community: document.getElementById('caseCommunity').value,
        service_content: document.getElementById('caseServiceContent').value,
        completion_date: document.getElementById('caseCompletionDate').value,
        review: document.getElementById('caseReview').value
      };
      
      if (id) {
        data.id = parseInt(id);
        await fetch('/api/admin/cases', {
          method: 'PUT',
          headers: { 'Authorization': \`Bearer \${token}\`, 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      } else {
        await fetch('/api/admin/cases', {
          method: 'POST',
          headers: { 'Authorization': \`Bearer \${token}\`, 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      }
      
      closeModal();
      loadCases();
    });
    
    loadCases();
  <\/script> `], [" ", `<div class="bg-white rounded-xl shadow-sm p-6"> <div class="flex items-center justify-between mb-6"> <h2 class="text-xl font-semibold">\u6848\u4F8B\u5217\u8868</h2> <button onclick="openModal()" class="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
\u6DFB\u52A0\u6848\u4F8B
</button> </div> <div class="overflow-x-auto"> <table class="w-full"> <thead> <tr class="bg-gray-50"> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">ID</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u6807\u9898</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u533A\u57DF</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u5C0F\u533A</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u64CD\u4F5C</th> </tr> </thead> <tbody id="casesTable"></tbody> </table> </div> </div> <div id="modal" class="fixed inset-0 bg-black/50 hidden items-center justify-center z-50 p-4"> <div class="bg-white rounded-xl shadow-xl p-6 w-full max-w-lg"> <div class="flex items-center justify-between mb-6"> <h3 class="text-xl font-semibold" id="modalTitle">\u6DFB\u52A0\u6848\u4F8B</h3> <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <form id="caseForm" class="space-y-4"> <input type="hidden" id="caseId"> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u6807\u9898</label> <input type="text" id="caseTitle" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u63CF\u8FF0</label> <input type="text" id="caseDescription" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u533A\u57DF</label> <input type="text" id="caseArea" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u5C0F\u533A</label> <input type="text" id="caseCommunity" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u670D\u52A1\u5185\u5BB9</label> <textarea id="caseServiceContent" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows="3"></textarea> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u5B8C\u6210\u65E5\u671F</label> <input type="date" id="caseCompletionDate" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u5BA2\u6237\u8BC4\u4EF7</label> <textarea id="caseReview" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows="3"></textarea> </div> <div class="flex justify-end space-x-4 pt-4"> <button type="button" onclick="closeModal()" class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">\u53D6\u6D88</button> <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">\u4FDD\u5B58</button> </div> </form> </div> </div> <script>
    async function loadCases() {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/admin/cases', {
        headers: { 'Authorization': \\\`Bearer \\\${token}\\\` }
      });
      const cases = await response.json();
      const table = document.getElementById('casesTable');
      table.innerHTML = cases.map(caseItem => \\\`
        <tr class="border-b border-gray-100">
          <td class="px-4 py-3">\\\${caseItem.id}</td>
          <td class="px-4 py-3">\\\${caseItem.title}</td>
          <td class="px-4 py-3">\\\${caseItem.area}</td>
          <td class="px-4 py-3">\\\${caseItem.community}</td>
          <td class="px-4 py-3">
            <button onclick="editCase(\\\${caseItem.id})" class="text-blue-600 hover:text-blue-700 mr-4">\u7F16\u8F91</button>
            <button onclick="deleteCase(\\\${caseItem.id})" class="text-red-500 hover:text-red-700">\u5220\u9664</button>
          </td>
        </tr>
      \\\`).join('');
    }
    
    function openModal() {
      document.getElementById('modal').classList.remove('hidden');
      document.getElementById('modal').classList.add('flex');
      document.getElementById('modalTitle').textContent = '\u6DFB\u52A0\u6848\u4F8B';
      document.getElementById('caseForm').reset();
      document.getElementById('caseId').value = '';
    }
    
    function closeModal() {
      document.getElementById('modal').classList.add('hidden');
      document.getElementById('modal').classList.remove('flex');
    }
    
    async function editCase(id) {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/admin/cases', {
        headers: { 'Authorization': \\\`Bearer \\\${token}\\\` }
      });
      const cases = await response.json();
      const caseItem = cases.find(c => c.id === id);
      if (caseItem) {
        document.getElementById('modalTitle').textContent = '\u7F16\u8F91\u6848\u4F8B';
        document.getElementById('caseId').value = caseItem.id;
        document.getElementById('caseTitle').value = caseItem.title;
        document.getElementById('caseDescription').value = caseItem.description;
        document.getElementById('caseArea').value = caseItem.area;
        document.getElementById('caseCommunity').value = caseItem.community;
        document.getElementById('caseServiceContent').value = caseItem.service_content;
        document.getElementById('caseCompletionDate').value = caseItem.completion_date;
        document.getElementById('caseReview').value = caseItem.review;
        document.getElementById('modal').classList.remove('hidden');
        document.getElementById('modal').classList.add('flex');
      }
    }
    
    async function deleteCase(id) {
      if (confirm('\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u6848\u4F8B\u5417\uFF1F')) {
        const token = localStorage.getItem('token');
        await fetch(\\\`/api/admin/cases?id=\\\${id}\\\`, {
          method: 'DELETE',
          headers: { 'Authorization': \\\`Bearer \\\${token}\\\` }
        });
        loadCases();
      }
    }
    
    document.getElementById('caseForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const id = document.getElementById('caseId').value;
      const data = {
        title: document.getElementById('caseTitle').value,
        description: document.getElementById('caseDescription').value,
        area: document.getElementById('caseArea').value,
        community: document.getElementById('caseCommunity').value,
        service_content: document.getElementById('caseServiceContent').value,
        completion_date: document.getElementById('caseCompletionDate').value,
        review: document.getElementById('caseReview').value
      };
      
      if (id) {
        data.id = parseInt(id);
        await fetch('/api/admin/cases', {
          method: 'PUT',
          headers: { 'Authorization': \\\`Bearer \\\${token}\\\`, 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      } else {
        await fetch('/api/admin/cases', {
          method: 'POST',
          headers: { 'Authorization': \\\`Bearer \\\${token}\\\`, 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      }
      
      closeModal();
      loadCases();
    });
    
    loadCases();
  <\/script> `])), maybeRenderHead()) })}`;
}, "E:/code/junze/junze/src/pages/admin/cases.astro", void 0);

const $$file = "E:/code/junze/junze/src/pages/admin/cases.astro";
const $$url = "/admin/cases";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cases,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
