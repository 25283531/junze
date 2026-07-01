import { a as createComponent, f as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DkHii4NB.mjs';
import 'kleur/colors';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_BEFbHsHH.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Updates = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "\u670D\u52A1\u52A8\u6001\u7BA1\u7406" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(["  ", `<div class="bg-white rounded-xl shadow-sm p-6 mb-6"> <div class="flex items-center justify-between mb-6"> <h2 class="text-xl font-semibold">\u5206\u7C7B\u7BA1\u7406</h2> <button onclick="openCategoryModal()" class="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
\u6DFB\u52A0\u5206\u7C7B
</button> </div> <div class="overflow-x-auto"> <table class="w-full"> <thead> <tr class="bg-gray-50"> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">ID</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u5206\u7C7B\u540D\u79F0</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u6392\u5E8F</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u64CD\u4F5C</th> </tr> </thead> <tbody id="categoriesTable"></tbody> </table> </div> </div>  <div class="bg-white rounded-xl shadow-sm p-6"> <div class="flex items-center justify-between mb-6"> <h2 class="text-xl font-semibold">\u52A8\u6001\u5217\u8868</h2> <button onclick="openUpdateModal()" class="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
\u53D1\u5E03\u52A8\u6001
</button> </div> <div class="overflow-x-auto"> <table class="w-full"> <thead> <tr class="bg-gray-50"> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">ID</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u6807\u9898</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u5206\u7C7B</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u5C0F\u533A</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u53D1\u5E03\u65E5\u671F</th> <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">\u64CD\u4F5C</th> </tr> </thead> <tbody id="updatesTable"></tbody> </table> </div> </div>  <div id="categoryModal" class="fixed inset-0 bg-black/50 hidden items-center justify-center z-50 p-4"> <div class="bg-white rounded-xl shadow-xl p-6 w-full max-w-md"> <div class="flex items-center justify-between mb-6"> <h3 class="text-xl font-semibold" id="categoryModalTitle">\u6DFB\u52A0\u5206\u7C7B</h3> <button onclick="closeCategoryModal()" class="text-gray-400 hover:text-gray-600"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <form id="categoryForm" class="space-y-4"> <input type="hidden" id="categoryId"> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u5206\u7C7B\u540D\u79F0</label> <input type="text" id="categoryName" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u6392\u5E8F</label> <input type="number" id="categorySortOrder" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" value="0"> </div> <div class="flex justify-end space-x-4 pt-4"> <button type="button" onclick="closeCategoryModal()" class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">\u53D6\u6D88</button> <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">\u4FDD\u5B58</button> </div> </form> </div> </div>  <div id="updateModal" class="fixed inset-0 bg-black/50 hidden items-center justify-center z-50 p-4"> <div class="bg-white rounded-xl shadow-xl p-6 w-full max-w-lg"> <div class="flex items-center justify-between mb-6"> <h3 class="text-xl font-semibold" id="updateModalTitle">\u53D1\u5E03\u52A8\u6001</h3> <button onclick="closeUpdateModal()" class="text-gray-400 hover:text-gray-600"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <form id="updateForm" class="space-y-4"> <input type="hidden" id="updateId"> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u5206\u7C7B</label> <div class="flex space-x-2"> <select id="updateCategoryId" class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required> <option value="">\u8BF7\u9009\u62E9\u5206\u7C7B</option> </select> <button type="button" onclick="openCategoryModal()" class="px-3 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 text-sm whitespace-nowrap">+ \u65B0\u5EFA</button> </div> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u6807\u9898</label> <input type="text" id="updateTitle" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u5185\u5BB9</label> <textarea id="updateContent" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows="4"></textarea> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u5C0F\u533A</label> <input type="text" id="updateCommunity" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u53D1\u5E03\u65E5\u671F</label> <input type="date" id="updatePublishDate" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u6392\u5E8F</label> <input type="number" id="updateSortOrder" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" value="0"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">\u914D\u56FE</label> <input type="file" id="updateImage" accept="image/*" class="hidden"> <div id="updateImageUploadArea" class="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 transition-colors"> <svg class="w-10 h-10 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path> </svg> <p id="updateUploadText" class="text-gray-600">\u70B9\u51FB\u4E0A\u4F20\u56FE\u7247</p> <p class="text-gray-400 text-sm mt-1">\u652F\u6301 JPG\u3001PNG \u683C\u5F0F\uFF0C\u6700\u5927 5MB</p> </div> <div id="updateImagePreview" class="mt-4 hidden"> <img id="updatePreviewImage" src="" alt="\u9884\u89C8" class="max-w-xs rounded-lg border border-gray-200"> <button type="button" onclick="removeUpdateImage()" class="mt-2 px-4 py-2 text-red-600 hover:text-red-700 text-sm">\u5220\u9664\u56FE\u7247</button> </div> <input type="hidden" id="updateImageKey"> </div> <div class="flex justify-end space-x-4 pt-4"> <button type="button" onclick="closeUpdateModal()" class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">\u53D6\u6D88</button> <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">\u4FDD\u5B58</button> </div> </form> </div> </div> <script>
    let categories = [];
    const uploadArea = document.getElementById('updateImageUploadArea');
    const fileInput = document.getElementById('updateImage');
    const imagePreview = document.getElementById('updateImagePreview');
    const previewImage = document.getElementById('updatePreviewImage');
    const uploadText = document.getElementById('updateUploadText');
    const imageKeyInput = document.getElementById('updateImageKey');

    uploadArea.addEventListener('click', () => { fileInput.click(); });

    fileInput.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      if (file.size > 5 * 1024 * 1024) { alert('\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 5MB'); return; }

      uploadText.textContent = '\u4E0A\u4F20\u4E2D...';
      uploadArea.classList.add('opacity-50', 'cursor-not-allowed');

      const formData = new FormData();
      formData.append('file', file);

      const token = localStorage.getItem('token');
      try {
        const response = await fetch('/api/admin/upload', {
          method: 'POST',
          headers: { 'Authorization': 'Bearer ' + token },
          body: formData
        });
        const data = await response.json();
        if (data.success) {
          imageKeyInput.value = data.imageKey;
          previewImage.src = '/api/admin/get-image?key=' + data.imageKey;
          imagePreview.classList.remove('hidden');
          uploadArea.classList.add('hidden');
        } else {
          alert('\u4E0A\u4F20\u5931\u8D25\uFF1A' + data.error);
        }
      } catch (error) {
        alert('\u4E0A\u4F20\u5931\u8D25\uFF1A\u7F51\u7EDC\u9519\u8BEF');
      } finally {
        uploadText.textContent = '\u70B9\u51FB\u4E0A\u4F20\u56FE\u7247';
        uploadArea.classList.remove('opacity-50', 'cursor-not-allowed');
      }
    });

    window.removeUpdateImage = function() {
      imageKeyInput.value = '';
      fileInput.value = '';
      imagePreview.classList.add('hidden');
      uploadArea.classList.remove('hidden');
    };

    function populateCategorySelect(selectedId) {
      const select = document.getElementById('updateCategoryId');
      select.innerHTML = '<option value="">\u8BF7\u9009\u62E9\u5206\u7C7B</option>';
      categories.forEach(function(cat) {
        const opt = document.createElement('option');
        opt.value = cat.id;
        opt.textContent = cat.name;
        if (cat.id === selectedId) opt.selected = true;
        select.appendChild(opt);
      });
    }

    async function loadCategories() {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/admin/service-update-categories', {
        headers: { 'Authorization': 'Bearer ' + token }
      });
      categories = await response.json();
      const table = document.getElementById('categoriesTable');
      table.innerHTML = categories.map(function(cat) {
        return '<tr class="border-b border-gray-100">' +
          '<td class="px-4 py-3">' + cat.id + '</td>' +
          '<td class="px-4 py-3">' + cat.name + '</td>' +
          '<td class="px-4 py-3">' + cat.sort_order + '</td>' +
          '<td class="px-4 py-3">' +
            '<button onclick="editCategory(' + cat.id + ')" class="text-blue-600 hover:text-blue-700 mr-4">\u7F16\u8F91</button>' +
            '<button onclick="deleteCategory(' + cat.id + ')" class="text-red-500 hover:text-red-700">\u5220\u9664</button>' +
          '</td>' +
        '</tr>';
      }).join('');
    }

    async function loadUpdates() {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/admin/service-updates', {
        headers: { 'Authorization': 'Bearer ' + token }
      });
      const updates = await response.json();
      const table = document.getElementById('updatesTable');
      table.innerHTML = updates.map(function(u) {
        return '<tr class="border-b border-gray-100">' +
          '<td class="px-4 py-3">' + u.id + '</td>' +
          '<td class="px-4 py-3 max-w-xs truncate">' + u.title + '</td>' +
          '<td class="px-4 py-3"><span class="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded">' + (u.category_name || '-') + '</span></td>' +
          '<td class="px-4 py-3">' + (u.community || '-') + '</td>' +
          '<td class="px-4 py-3">' + (u.publish_date || '-') + '</td>' +
          '<td class="px-4 py-3">' +
            '<button onclick="editUpdate(' + u.id + ')" class="text-blue-600 hover:text-blue-700 mr-4">\u7F16\u8F91</button>' +
            '<button onclick="deleteUpdate(' + u.id + ')" class="text-red-500 hover:text-red-700">\u5220\u9664</button>' +
          '</td>' +
        '</tr>';
      }).join('');
    }

    // Category modal
    function openCategoryModal() {
      document.getElementById('categoryModal').classList.remove('hidden');
      document.getElementById('categoryModal').classList.add('flex');
      document.getElementById('categoryModalTitle').textContent = '\u6DFB\u52A0\u5206\u7C7B';
      document.getElementById('categoryForm').reset();
      document.getElementById('categoryId').value = '';
    }
    function closeCategoryModal() {
      document.getElementById('categoryModal').classList.add('hidden');
      document.getElementById('categoryModal').classList.remove('flex');
    }

    async function editCategory(id) {
      const cat = categories.find(function(c) { return c.id === id; });
      if (cat) {
        document.getElementById('categoryModalTitle').textContent = '\u7F16\u8F91\u5206\u7C7B';
        document.getElementById('categoryId').value = cat.id;
        document.getElementById('categoryName').value = cat.name;
        document.getElementById('categorySortOrder').value = cat.sort_order;
        document.getElementById('categoryModal').classList.remove('hidden');
        document.getElementById('categoryModal').classList.add('flex');
      }
    }

    async function deleteCategory(id) {
      if (!confirm('\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u5206\u7C7B\u5417\uFF1F\u8BE5\u5206\u7C7B\u4E0B\u7684\u52A8\u6001\u4E5F\u4F1A\u88AB\u5220\u9664\u3002')) return;
      const token = localStorage.getItem('token');
      await fetch('/api/admin/service-update-categories?id=' + id, {
        method: 'DELETE',
        headers: { 'Authorization': 'Bearer ' + token }
      });
      loadCategories();
      loadUpdates();
    }

    document.getElementById('categoryForm').addEventListener('submit', async function(e) {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const id = document.getElementById('categoryId').value;
      const data = {
        name: document.getElementById('categoryName').value,
        sort_order: parseInt(document.getElementById('categorySortOrder').value) || 0
      };
      if (id) {
        data.id = parseInt(id);
        await fetch('/api/admin/service-update-categories', {
          method: 'PUT',
          headers: { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      } else {
        await fetch('/api/admin/service-update-categories', {
          method: 'POST',
          headers: { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      }
      closeCategoryModal();
      loadCategories();
      loadUpdates();
    });

    // Update modal
    function openUpdateModal() {
      populateCategorySelect(null);
      document.getElementById('updateModal').classList.remove('hidden');
      document.getElementById('updateModal').classList.add('flex');
      document.getElementById('updateModalTitle').textContent = '\u53D1\u5E03\u52A8\u6001';
      document.getElementById('updateForm').reset();
      document.getElementById('updateId').value = '';
      removeUpdateImage();
    }
    function closeUpdateModal() {
      document.getElementById('updateModal').classList.add('hidden');
      document.getElementById('updateModal').classList.remove('flex');
    }

    async function editUpdate(id) {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/admin/service-updates', {
        headers: { 'Authorization': 'Bearer ' + token }
      });
      const updates = await response.json();
      const u = updates.find(function(item) { return item.id === id; });
      if (u) {
        populateCategorySelect(u.category_id);
        document.getElementById('updateModalTitle').textContent = '\u7F16\u8F91\u52A8\u6001';
        document.getElementById('updateId').value = u.id;
        document.getElementById('updateCategoryId').value = u.category_id || '';
        document.getElementById('updateTitle').value = u.title;
        document.getElementById('updateContent').value = u.content || '';
        document.getElementById('updateCommunity').value = u.community || '';
        document.getElementById('updatePublishDate').value = u.publish_date || '';
        document.getElementById('updateSortOrder').value = u.sort_order || 0;
        if (u.image_key) {
          imageKeyInput.value = u.image_key;
          previewImage.src = '/api/admin/get-image?key=' + u.image_key;
          imagePreview.classList.remove('hidden');
          uploadArea.classList.add('hidden');
        } else {
          removeUpdateImage();
        }
        document.getElementById('updateModal').classList.remove('hidden');
        document.getElementById('updateModal').classList.add('flex');
      }
    }

    async function deleteUpdate(id) {
      if (!confirm('\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u6761\u52A8\u6001\u5417\uFF1F')) return;
      const token = localStorage.getItem('token');
      await fetch('/api/admin/service-updates?id=' + id, {
        method: 'DELETE',
        headers: { 'Authorization': 'Bearer ' + token }
      });
      loadUpdates();
    }

    document.getElementById('updateForm').addEventListener('submit', async function(e) {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const id = document.getElementById('updateId').value;
      const data = {
        category_id: document.getElementById('updateCategoryId').value ? parseInt(document.getElementById('updateCategoryId').value) : null,
        title: document.getElementById('updateTitle').value,
        content: document.getElementById('updateContent').value,
        community: document.getElementById('updateCommunity').value,
        publish_date: document.getElementById('updatePublishDate').value,
        sort_order: parseInt(document.getElementById('updateSortOrder').value) || 0,
        image_key: imageKeyInput.value || null
      };
      if (id) {
        data.id = parseInt(id);
        await fetch('/api/admin/service-updates', {
          method: 'PUT',
          headers: { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      } else {
        await fetch('/api/admin/service-updates', {
          method: 'POST',
          headers: { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      }
      closeUpdateModal();
      loadUpdates();
    });

    loadCategories();
    loadUpdates();
  <\/script> `])), maybeRenderHead()) })}`;
}, "E:/code/junze/junze/src/pages/admin/updates.astro", void 0);

const $$file = "E:/code/junze/junze/src/pages/admin/updates.astro";
const $$url = "/admin/updates";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Updates,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
