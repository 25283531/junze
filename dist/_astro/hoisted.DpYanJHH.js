import"https://cdn.tailwindcss.com";async function d(){const o=localStorage.getItem("token"),n=await(await fetch("/api/admin/services",{headers:{Authorization:`Bearer ${o}`}})).json(),t=document.getElementById("servicesTable");t.innerHTML=n.map(e=>`
        <tr class="border-b border-gray-100">
          <td class="px-4 py-3">${e.id}</td>
          <td class="px-4 py-3">${e.title}</td>
          <td class="px-4 py-3">${e.price_range}</td>
          <td class="px-4 py-3">${e.sort_order}</td>
          <td class="px-4 py-3">
            <button onclick="editService(${e.id})" class="text-blue-600 hover:text-blue-700 mr-4">编辑</button>
            <button onclick="deleteService(${e.id})" class="text-red-500 hover:text-red-700">删除</button>
          </td>
        </tr>
      `).join("")}function a(){document.getElementById("modal").classList.add("hidden"),document.getElementById("modal").classList.remove("flex")}document.getElementById("serviceForm").addEventListener("submit",async o=>{o.preventDefault();const s=localStorage.getItem("token"),n=document.getElementById("serviceId").value,t={title:document.getElementById("serviceTitle").value,slug:document.getElementById("serviceSlug").value,description:document.getElementById("serviceDescription").value,price_range:document.getElementById("servicePrice").value,sort_order:document.getElementById("serviceSort").value,process:["步骤1","步骤2","步骤3","步骤4","步骤5"],icon:"Home"};n?(t.id=parseInt(n),await fetch("/api/admin/services",{method:"PUT",headers:{Authorization:`Bearer ${s}`,"Content-Type":"application/json"},body:JSON.stringify(t)})):await fetch("/api/admin/services",{method:"POST",headers:{Authorization:`Bearer ${s}`,"Content-Type":"application/json"},body:JSON.stringify(t)}),a(),d()});d();
