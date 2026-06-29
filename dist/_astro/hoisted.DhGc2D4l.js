import"./AdminLayout.astro_astro_type_script_index_1_lang.4l-uxx_t.js";import"https://cdn.tailwindcss.com";async function s(){const n=localStorage.getItem("token"),o=await(await fetch("/admin/services",{headers:{Authorization:`Bearer ${n}`}})).json(),t=document.getElementById("servicesTable");t.innerHTML=o.map(e=>`
        <tr class="border-b border-gray-100">
          <td class="px-4 py-3">${e.id}</td>
          <td class="px-4 py-3">${e.title}</td>
          <td class="px-4 py-3">${e.price_range}</td>
          <td class="px-4 py-3">${e.sort_order}</td>
          <td class="px-4 py-3">
            <button onclick="editService(${e.id})" class="text-primary hover:text-primary-dark mr-4">编辑</button>
            <button onclick="deleteService(${e.id})" class="text-red-500 hover:text-red-700">删除</button>
          </td>
        </tr>
      `).join("")}function d(){document.getElementById("modal").classList.add("hidden"),document.getElementById("modal").classList.remove("flex")}document.getElementById("serviceForm").addEventListener("submit",async n=>{n.preventDefault();const r=localStorage.getItem("token"),o=document.getElementById("serviceId").value,t={title:document.getElementById("serviceTitle").value,slug:document.getElementById("serviceSlug").value,description:document.getElementById("serviceDescription").value,price_range:document.getElementById("servicePrice").value,sort_order:document.getElementById("serviceSort").value,process:["步骤1","步骤2","步骤3","步骤4","步骤5"],icon:"Home"};o?(t.id=parseInt(o),await fetch("/admin/services",{method:"PUT",headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/json"},body:JSON.stringify(t)})):await fetch("/admin/services",{method:"POST",headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/json"},body:JSON.stringify(t)}),d(),s()});s();
