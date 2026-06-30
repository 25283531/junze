import { a as createComponent, f as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BiXOaMPZ.mjs';
import 'kleur/colors';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_CMpVxPcz.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "\u670D\u52A1\u7BA1\u7406" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", `<div class="bg-white rounded-xl shadow-sm p-6"> <div class="flex items-center justify-between mb-6"> <h2 class="text-xl font-semibold">\u670D\u52A1\u5217\u8868</h2> <button onclick="openModal()" class="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
\u6DFB\u52A0\u670D\u52A1
</button> </div> <div class="overflow-x-auto"> <table class="w-full"> <thead> <tr class="bg-gray-50"> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">ID</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u6807\u9898</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u4EF7\u683C</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u6392\u5E8F</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u64CD\u4F5C</th> </tr> </thead> <tbody id="servicesTable"></tbody> </table> </div> </div> <div id="modal" class="fixed inset-0 bg-black/50 hidden items-center justify-center z-50 p-4"> <div class="bg-white rounded-xl shadow-xl p-6 w-full max-w-lg"> <div class="flex items-center justify-between mb-6"> <h3 class="text-xl font-semibold" id="modalTitle">\u6DFB\u52A0\u670D\u52A1</h3> <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <form id="serviceForm" class="space-y-4"> <input type="hidden" id="serviceId"> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u6807\u9898</label> <input type="text" id="serviceTitle" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u522B\u540D\uFF08URL\uFF09</label> <input type="text" id="serviceSlug" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u63CF\u8FF0</label> <input type="text" id="serviceDescription" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u8BE6\u7EC6\u5185\u5BB9</label> <textarea id="serviceContent" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows="5"></textarea> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u4EF7\u683C\u533A\u95F4</label> <input type="text" id="servicePrice" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u6392\u5E8F</label> <input type="number" id="serviceSort" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div class="flex justify-end space-x-4 pt-4"> <button type="button" onclick="closeModal()" class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">\u53D6\u6D88</button> <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">\u4FDD\u5B58</button> </div> </form> </div> </div> <script>
    async function loadServices() {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/admin/services', {
        headers: { 'Authorization': \`Bearer \${token}\` }
      });
      const services = await response.json();
      const table = document.getElementById('servicesTable');
      table.innerHTML = services.map(service => \`
        <tr class="border-b border-gray-100">
          <td class="px-4 py-3">\${service.id}</td>
          <td class="px-4 py-3">\${service.title}</td>
          <td class="px-4 py-3">\${service.price_range}</td>
          <td class="px-4 py-3">\${service.sort_order}</td>
          <td class="px-4 py-3">
            <button onclick="editService(\${service.id})" class="text-blue-600 hover:text-blue-700 mr-4">\u7F16\u8F91</button>
            <button onclick="deleteService(\${service.id})" class="text-red-500 hover:text-red-700">\u5220\u9664</button>
          </td>
        </tr>
      \`).join('');
    }
    
    function openModal() {
      document.getElementById('modal').classList.remove('hidden');
      document.getElementById('modal').classList.add('flex');
      document.getElementById('modalTitle').textContent = '\u6DFB\u52A0\u670D\u52A1';
      document.getElementById('serviceForm').reset();
      document.getElementById('serviceId').value = '';
    }
    
    function closeModal() {
      document.getElementById('modal').classList.add('hidden');
      document.getElementById('modal').classList.remove('flex');
    }
    
    async function editService(id) {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/admin/services', {
        headers: { 'Authorization': \`Bearer \${token}\` }
      });
      const services = await response.json();
      const service = services.find(s => s.id === id);
      if (service) {
        document.getElementById('modalTitle').textContent = '\u7F16\u8F91\u670D\u52A1';
        document.getElementById('serviceId').value = service.id;
        document.getElementById('serviceTitle').value = service.title;
        document.getElementById('serviceSlug').value = service.slug;
        document.getElementById('serviceDescription').value = service.description;
        document.getElementById('serviceContent').value = service.content || '';
        document.getElementById('servicePrice').value = service.price_range;
        document.getElementById('serviceSort').value = service.sort_order;
        document.getElementById('modal').classList.remove('hidden');
        document.getElementById('modal').classList.add('flex');
      }
    }
    
    async function deleteService(id) {
      if (confirm('\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u670D\u52A1\u5417\uFF1F')) {
        const token = localStorage.getItem('token');
        await fetch(\`/api/admin/services?id=\${id}\`, {
          method: 'DELETE',
          headers: { 'Authorization': \`Bearer \${token}\` }
        });
        loadServices();
      }
    }
    
    document.getElementById('serviceForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const id = document.getElementById('serviceId').value;
      const data = {
        title: document.getElementById('serviceTitle').value,
        slug: document.getElementById('serviceSlug').value,
        description: document.getElementById('serviceDescription').value,
        content: document.getElementById('serviceContent').value,
        price_range: document.getElementById('servicePrice').value,
        sort_order: parseInt(document.getElementById('serviceSort').value) || 0,
        process: ['\u6B65\u9AA41', '\u6B65\u9AA42', '\u6B65\u9AA43', '\u6B65\u9AA44', '\u6B65\u9AA45'],
        icon: 'Home'
      };
      
      if (id) {
        data.id = parseInt(id);
        await fetch('/api/admin/services', {
          method: 'PUT',
          headers: { 'Authorization': \`Bearer \${token}\`, 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      } else {
        await fetch('/api/admin/services', {
          method: 'POST',
          headers: { 'Authorization': \`Bearer \${token}\`, 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      }
      
      closeModal();
      loadServices();
    });
    
    loadServices();
  <\/script> `], [" ", `<div class="bg-white rounded-xl shadow-sm p-6"> <div class="flex items-center justify-between mb-6"> <h2 class="text-xl font-semibold">\u670D\u52A1\u5217\u8868</h2> <button onclick="openModal()" class="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
\u6DFB\u52A0\u670D\u52A1
</button> </div> <div class="overflow-x-auto"> <table class="w-full"> <thead> <tr class="bg-gray-50"> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">ID</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u6807\u9898</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u4EF7\u683C</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u6392\u5E8F</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u64CD\u4F5C</th> </tr> </thead> <tbody id="servicesTable"></tbody> </table> </div> </div> <div id="modal" class="fixed inset-0 bg-black/50 hidden items-center justify-center z-50 p-4"> <div class="bg-white rounded-xl shadow-xl p-6 w-full max-w-lg"> <div class="flex items-center justify-between mb-6"> <h3 class="text-xl font-semibold" id="modalTitle">\u6DFB\u52A0\u670D\u52A1</h3> <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <form id="serviceForm" class="space-y-4"> <input type="hidden" id="serviceId"> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u6807\u9898</label> <input type="text" id="serviceTitle" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u522B\u540D\uFF08URL\uFF09</label> <input type="text" id="serviceSlug" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u63CF\u8FF0</label> <input type="text" id="serviceDescription" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u8BE6\u7EC6\u5185\u5BB9</label> <textarea id="serviceContent" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows="5"></textarea> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u4EF7\u683C\u533A\u95F4</label> <input type="text" id="servicePrice" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u6392\u5E8F</label> <input type="number" id="serviceSort" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div class="flex justify-end space-x-4 pt-4"> <button type="button" onclick="closeModal()" class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">\u53D6\u6D88</button> <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">\u4FDD\u5B58</button> </div> </form> </div> </div> <script>
    async function loadServices() {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/admin/services', {
        headers: { 'Authorization': \\\`Bearer \\\${token}\\\` }
      });
      const services = await response.json();
      const table = document.getElementById('servicesTable');
      table.innerHTML = services.map(service => \\\`
        <tr class="border-b border-gray-100">
          <td class="px-4 py-3">\\\${service.id}</td>
          <td class="px-4 py-3">\\\${service.title}</td>
          <td class="px-4 py-3">\\\${service.price_range}</td>
          <td class="px-4 py-3">\\\${service.sort_order}</td>
          <td class="px-4 py-3">
            <button onclick="editService(\\\${service.id})" class="text-blue-600 hover:text-blue-700 mr-4">\u7F16\u8F91</button>
            <button onclick="deleteService(\\\${service.id})" class="text-red-500 hover:text-red-700">\u5220\u9664</button>
          </td>
        </tr>
      \\\`).join('');
    }
    
    function openModal() {
      document.getElementById('modal').classList.remove('hidden');
      document.getElementById('modal').classList.add('flex');
      document.getElementById('modalTitle').textContent = '\u6DFB\u52A0\u670D\u52A1';
      document.getElementById('serviceForm').reset();
      document.getElementById('serviceId').value = '';
    }
    
    function closeModal() {
      document.getElementById('modal').classList.add('hidden');
      document.getElementById('modal').classList.remove('flex');
    }
    
    async function editService(id) {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/admin/services', {
        headers: { 'Authorization': \\\`Bearer \\\${token}\\\` }
      });
      const services = await response.json();
      const service = services.find(s => s.id === id);
      if (service) {
        document.getElementById('modalTitle').textContent = '\u7F16\u8F91\u670D\u52A1';
        document.getElementById('serviceId').value = service.id;
        document.getElementById('serviceTitle').value = service.title;
        document.getElementById('serviceSlug').value = service.slug;
        document.getElementById('serviceDescription').value = service.description;
        document.getElementById('serviceContent').value = service.content || '';
        document.getElementById('servicePrice').value = service.price_range;
        document.getElementById('serviceSort').value = service.sort_order;
        document.getElementById('modal').classList.remove('hidden');
        document.getElementById('modal').classList.add('flex');
      }
    }
    
    async function deleteService(id) {
      if (confirm('\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u670D\u52A1\u5417\uFF1F')) {
        const token = localStorage.getItem('token');
        await fetch(\\\`/api/admin/services?id=\\\${id}\\\`, {
          method: 'DELETE',
          headers: { 'Authorization': \\\`Bearer \\\${token}\\\` }
        });
        loadServices();
      }
    }
    
    document.getElementById('serviceForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const id = document.getElementById('serviceId').value;
      const data = {
        title: document.getElementById('serviceTitle').value,
        slug: document.getElementById('serviceSlug').value,
        description: document.getElementById('serviceDescription').value,
        content: document.getElementById('serviceContent').value,
        price_range: document.getElementById('servicePrice').value,
        sort_order: parseInt(document.getElementById('serviceSort').value) || 0,
        process: ['\u6B65\u9AA41', '\u6B65\u9AA42', '\u6B65\u9AA43', '\u6B65\u9AA44', '\u6B65\u9AA45'],
        icon: 'Home'
      };
      
      if (id) {
        data.id = parseInt(id);
        await fetch('/api/admin/services', {
          method: 'PUT',
          headers: { 'Authorization': \\\`Bearer \\\${token}\\\`, 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      } else {
        await fetch('/api/admin/services', {
          method: 'POST',
          headers: { 'Authorization': \\\`Bearer \\\${token}\\\`, 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      }
      
      closeModal();
      loadServices();
    });
    
    loadServices();
  <\/script> `])), maybeRenderHead()) })}`;
}, "E:/code/junze/junze/src/pages/admin/services.astro", void 0);

const $$file = "E:/code/junze/junze/src/pages/admin/services.astro";
const $$url = "/admin/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
