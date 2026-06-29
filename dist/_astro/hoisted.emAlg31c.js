import"./AdminLayout.astro_astro_type_script_index_1_lang.4l-uxx_t.js";import"https://cdn.tailwindcss.com";async function d(){const a=localStorage.getItem("token"),n=await(await fetch("/admin/cases",{headers:{Authorization:`Bearer ${a}`}})).json(),t=document.getElementById("casesTable");t.innerHTML=n.map(e=>`
        <tr class="border-b border-gray-100">
          <td class="px-4 py-3">${e.id}</td>
          <td class="px-4 py-3">${e.title}</td>
          <td class="px-4 py-3">${e.area}</td>
          <td class="px-4 py-3">${e.community}</td>
          <td class="px-4 py-3">
            <button onclick="editCase(${e.id})" class="text-primary hover:text-primary-dark mr-4">编辑</button>
            <button onclick="deleteCase(${e.id})" class="text-red-500 hover:text-red-700">删除</button>
          </td>
        </tr>
      `).join("")}function s(){document.getElementById("modal").classList.add("hidden"),document.getElementById("modal").classList.remove("flex")}document.getElementById("caseForm").addEventListener("submit",async a=>{a.preventDefault();const o=localStorage.getItem("token"),n=document.getElementById("caseId").value,t={title:document.getElementById("caseTitle").value,description:document.getElementById("caseDescription").value,area:document.getElementById("caseArea").value,community:document.getElementById("caseCommunity").value,service_content:document.getElementById("caseServiceContent").value,completion_date:document.getElementById("caseCompletionDate").value,review:document.getElementById("caseReview").value};n?(t.id=parseInt(n),await fetch("/admin/cases",{method:"PUT",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"},body:JSON.stringify(t)})):await fetch("/admin/cases",{method:"POST",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"},body:JSON.stringify(t)}),s(),d()});d();
