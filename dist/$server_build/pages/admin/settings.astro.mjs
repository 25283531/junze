import { a as createComponent, f as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BiXOaMPZ.mjs';
import 'kleur/colors';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_Di-T1vgV.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Settings = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "\u5546\u5BB6\u8BBE\u7F6E" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", `<div class="bg-white rounded-xl shadow-sm p-6"> <h2 class="text-xl font-semibold mb-6">\u5546\u5BB6\u4FE1\u606F\u8BBE\u7F6E</h2> <form id="settingsForm" class="space-y-6 max-w-2xl"> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u5546\u5BB6\u540D\u79F0</label> <input type="text" id="businessName" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u5546\u5BB6\u63CF\u8FF0</label> <textarea id="businessDescription" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows="4"></textarea> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u8054\u7CFB\u7535\u8BDD</label> <input type="text" id="businessPhone" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u670D\u52A1\u533A\u57DF\uFF08\u7528\u9017\u53F7\u5206\u9694\uFF09</label> <input type="text" id="businessServiceAreas" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u670D\u52A1\u65F6\u95F4</label> <input type="text" id="businessHours" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u5730\u5740</label> <input type="text" id="businessAddress" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u5FAE\u4FE1</label> <input type="text" id="businessWechat" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u8425\u4E1A\u6267\u7167</label> <input type="text" id="businessLicense" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">\u8425\u4E1A\u6267\u7167\u56FE\u7247</label> <input type="file" id="licenseImage" accept="image/*" class="hidden"> <div id="imageUploadArea" class="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 transition-colors"> <svg class="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path> </svg> <p id="uploadText" class="text-gray-600">\u70B9\u51FB\u4E0A\u4F20\u8425\u4E1A\u6267\u7167\u56FE\u7247</p> <p class="text-gray-400 text-sm mt-2">\u652F\u6301 JPG\u3001PNG \u683C\u5F0F\uFF0C\u6700\u5927 5MB</p> </div> <div id="imagePreview" class="mt-4 hidden"> <img id="previewImage" src="" alt="\u8425\u4E1A\u6267\u7167" class="max-w-md rounded-lg border border-gray-200"> <button type="button" onclick="removeImage()" class="mt-2 px-4 py-2 text-red-600 hover:text-red-700 text-sm">\u5220\u9664\u56FE\u7247</button> </div> <input type="hidden" id="licenseImageKey"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u670D\u52A1\u627F\u8BFA</label> <textarea id="businessPromises" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows="4"></textarea> </div> <div class="flex justify-end space-x-4 pt-4"> <button type="button" onclick="resetForm()" class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">\u91CD\u7F6E</button> <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">\u4FDD\u5B58\u8BBE\u7F6E</button> </div> </form> </div> <script>
    const uploadArea = document.getElementById('imageUploadArea');
    const fileInput = document.getElementById('licenseImage');
    const imagePreview = document.getElementById('imagePreview');
    const previewImage = document.getElementById('previewImage');
    const uploadText = document.getElementById('uploadText');
    const licenseImageKey = document.getElementById('licenseImageKey');

    uploadArea.addEventListener('click', () => {
      fileInput.click();
    });

    fileInput.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      if (file.size > 5 * 1024 * 1024) {
        alert('\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 5MB');
        return;
      }

      uploadText.textContent = '\u4E0A\u4F20\u4E2D...';
      uploadArea.classList.add('opacity-50', 'cursor-not-allowed');

      const formData = new FormData();
      formData.append('file', file);

      const token = localStorage.getItem('token');
      try {
        const response = await fetch('/api/admin/upload', {
          method: 'POST',
          headers: { 'Authorization': \`Bearer \${token}\` },
          body: formData
        });

        const data = await response.json();
        if (data.success) {
          licenseImageKey.value = data.imageKey;
          previewImage.src = \`/api/admin/get-image?key=\${data.imageKey}\`;
          imagePreview.classList.remove('hidden');
          uploadArea.classList.add('hidden');
        } else {
          alert('\u4E0A\u4F20\u5931\u8D25\uFF1A' + data.error);
        }
      } catch (error) {
        alert('\u4E0A\u4F20\u5931\u8D25\uFF1A\u7F51\u7EDC\u9519\u8BEF');
      } finally {
        uploadText.textContent = '\u70B9\u51FB\u4E0A\u4F20\u8425\u4E1A\u6267\u7167\u56FE\u7247';
        uploadArea.classList.remove('opacity-50', 'cursor-not-allowed');
      }
    });

    window.removeImage = function() {
      licenseImageKey.value = '';
      fileInput.value = '';
      imagePreview.classList.add('hidden');
      uploadArea.classList.remove('hidden');
    }

    async function loadSettings() {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/admin/settings', {
        headers: { 'Authorization': \`Bearer \${token}\` }
      });
      const settings = await response.json();
      if (settings) {
        document.getElementById('businessName').value = settings.name || '';
        document.getElementById('businessDescription').value = settings.description || '';
        document.getElementById('businessPhone').value = settings.telephone || '';
        document.getElementById('businessServiceAreas').value = settings.service_areas ? settings.service_areas.join(', ') : '';
        document.getElementById('businessHours').value = '';
        document.getElementById('businessAddress').value = settings.address || '';
        document.getElementById('businessWechat').value = settings.wechat || '';
        document.getElementById('businessLicense').value = settings.license || '';
        document.getElementById('businessPromises').value = '';
        
        if (settings.license_image_key) {
          licenseImageKey.value = settings.license_image_key;
          previewImage.src = \`/api/admin/get-image?key=\${settings.license_image_key}\`;
          imagePreview.classList.remove('hidden');
          uploadArea.classList.add('hidden');
        }
      }
    }
    
    function resetForm() {
      document.getElementById('settingsForm').reset();
      removeImage();
    }
    
    document.getElementById('settingsForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const data = {
        name: document.getElementById('businessName').value,
        description: document.getElementById('businessDescription').value,
        telephone: document.getElementById('businessPhone').value,
        service_areas: document.getElementById('businessServiceAreas').value.split(/[,\uFF0C]/).map(s => s.trim()).filter(s => s),
        address: document.getElementById('businessAddress').value,
        license: document.getElementById('businessLicense').value,
        license_image_key: licenseImageKey.value,
        wechat: document.getElementById('businessWechat').value
      };
      
      await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Authorization': \`Bearer \${token}\`, 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      alert('\u8BBE\u7F6E\u5DF2\u4FDD\u5B58');
    });
    
    loadSettings();
  <\/script> `], [" ", `<div class="bg-white rounded-xl shadow-sm p-6"> <h2 class="text-xl font-semibold mb-6">\u5546\u5BB6\u4FE1\u606F\u8BBE\u7F6E</h2> <form id="settingsForm" class="space-y-6 max-w-2xl"> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u5546\u5BB6\u540D\u79F0</label> <input type="text" id="businessName" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u5546\u5BB6\u63CF\u8FF0</label> <textarea id="businessDescription" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows="4"></textarea> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u8054\u7CFB\u7535\u8BDD</label> <input type="text" id="businessPhone" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u670D\u52A1\u533A\u57DF\uFF08\u7528\u9017\u53F7\u5206\u9694\uFF09</label> <input type="text" id="businessServiceAreas" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u670D\u52A1\u65F6\u95F4</label> <input type="text" id="businessHours" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u5730\u5740</label> <input type="text" id="businessAddress" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u5FAE\u4FE1</label> <input type="text" id="businessWechat" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u8425\u4E1A\u6267\u7167</label> <input type="text" id="businessLicense" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">\u8425\u4E1A\u6267\u7167\u56FE\u7247</label> <input type="file" id="licenseImage" accept="image/*" class="hidden"> <div id="imageUploadArea" class="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 transition-colors"> <svg class="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path> </svg> <p id="uploadText" class="text-gray-600">\u70B9\u51FB\u4E0A\u4F20\u8425\u4E1A\u6267\u7167\u56FE\u7247</p> <p class="text-gray-400 text-sm mt-2">\u652F\u6301 JPG\u3001PNG \u683C\u5F0F\uFF0C\u6700\u5927 5MB</p> </div> <div id="imagePreview" class="mt-4 hidden"> <img id="previewImage" src="" alt="\u8425\u4E1A\u6267\u7167" class="max-w-md rounded-lg border border-gray-200"> <button type="button" onclick="removeImage()" class="mt-2 px-4 py-2 text-red-600 hover:text-red-700 text-sm">\u5220\u9664\u56FE\u7247</button> </div> <input type="hidden" id="licenseImageKey"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">\u670D\u52A1\u627F\u8BFA</label> <textarea id="businessPromises" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows="4"></textarea> </div> <div class="flex justify-end space-x-4 pt-4"> <button type="button" onclick="resetForm()" class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">\u91CD\u7F6E</button> <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">\u4FDD\u5B58\u8BBE\u7F6E</button> </div> </form> </div> <script>
    const uploadArea = document.getElementById('imageUploadArea');
    const fileInput = document.getElementById('licenseImage');
    const imagePreview = document.getElementById('imagePreview');
    const previewImage = document.getElementById('previewImage');
    const uploadText = document.getElementById('uploadText');
    const licenseImageKey = document.getElementById('licenseImageKey');

    uploadArea.addEventListener('click', () => {
      fileInput.click();
    });

    fileInput.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      if (file.size > 5 * 1024 * 1024) {
        alert('\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 5MB');
        return;
      }

      uploadText.textContent = '\u4E0A\u4F20\u4E2D...';
      uploadArea.classList.add('opacity-50', 'cursor-not-allowed');

      const formData = new FormData();
      formData.append('file', file);

      const token = localStorage.getItem('token');
      try {
        const response = await fetch('/api/admin/upload', {
          method: 'POST',
          headers: { 'Authorization': \\\`Bearer \\\${token}\\\` },
          body: formData
        });

        const data = await response.json();
        if (data.success) {
          licenseImageKey.value = data.imageKey;
          previewImage.src = \\\`/api/admin/get-image?key=\\\${data.imageKey}\\\`;
          imagePreview.classList.remove('hidden');
          uploadArea.classList.add('hidden');
        } else {
          alert('\u4E0A\u4F20\u5931\u8D25\uFF1A' + data.error);
        }
      } catch (error) {
        alert('\u4E0A\u4F20\u5931\u8D25\uFF1A\u7F51\u7EDC\u9519\u8BEF');
      } finally {
        uploadText.textContent = '\u70B9\u51FB\u4E0A\u4F20\u8425\u4E1A\u6267\u7167\u56FE\u7247';
        uploadArea.classList.remove('opacity-50', 'cursor-not-allowed');
      }
    });

    window.removeImage = function() {
      licenseImageKey.value = '';
      fileInput.value = '';
      imagePreview.classList.add('hidden');
      uploadArea.classList.remove('hidden');
    }

    async function loadSettings() {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/admin/settings', {
        headers: { 'Authorization': \\\`Bearer \\\${token}\\\` }
      });
      const settings = await response.json();
      if (settings) {
        document.getElementById('businessName').value = settings.name || '';
        document.getElementById('businessDescription').value = settings.description || '';
        document.getElementById('businessPhone').value = settings.telephone || '';
        document.getElementById('businessServiceAreas').value = settings.service_areas ? settings.service_areas.join(', ') : '';
        document.getElementById('businessHours').value = '';
        document.getElementById('businessAddress').value = settings.address || '';
        document.getElementById('businessWechat').value = settings.wechat || '';
        document.getElementById('businessLicense').value = settings.license || '';
        document.getElementById('businessPromises').value = '';
        
        if (settings.license_image_key) {
          licenseImageKey.value = settings.license_image_key;
          previewImage.src = \\\`/api/admin/get-image?key=\\\${settings.license_image_key}\\\`;
          imagePreview.classList.remove('hidden');
          uploadArea.classList.add('hidden');
        }
      }
    }
    
    function resetForm() {
      document.getElementById('settingsForm').reset();
      removeImage();
    }
    
    document.getElementById('settingsForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const data = {
        name: document.getElementById('businessName').value,
        description: document.getElementById('businessDescription').value,
        telephone: document.getElementById('businessPhone').value,
        service_areas: document.getElementById('businessServiceAreas').value.split(/[,\uFF0C]/).map(s => s.trim()).filter(s => s),
        address: document.getElementById('businessAddress').value,
        license: document.getElementById('businessLicense').value,
        license_image_key: licenseImageKey.value,
        wechat: document.getElementById('businessWechat').value
      };
      
      await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Authorization': \\\`Bearer \\\${token}\\\`, 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      alert('\u8BBE\u7F6E\u5DF2\u4FDD\u5B58');
    });
    
    loadSettings();
  <\/script> `])), maybeRenderHead()) })}`;
}, "E:/code/junze/junze/src/pages/admin/settings.astro", void 0);

const $$file = "E:/code/junze/junze/src/pages/admin/settings.astro";
const $$url = "/admin/settings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Settings,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
