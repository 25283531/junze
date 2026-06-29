import"https://cdn.tailwindcss.com";async function d(){const n=localStorage.getItem("token"),a=await(await fetch("/api/admin/faq",{headers:{Authorization:`Bearer ${n}`}})).json(),t=document.getElementById("faqTable");t.innerHTML=a.map(e=>`
        <tr class="border-b border-gray-100">
          <td class="px-4 py-3">${e.id}</td>
          <td class="px-4 py-3 max-w-xs truncate">${e.question}</td>
          <td class="px-4 py-3">${e.sort_order}</td>
          <td class="px-4 py-3">
            <button onclick="editFaq(${e.id})" class="text-blue-600 hover:text-blue-700 mr-4">编辑</button>
            <button onclick="deleteFaq(${e.id})" class="text-red-500 hover:text-red-700">删除</button>
          </td>
        </tr>
      `).join("")}function s(){document.getElementById("modal").classList.add("hidden"),document.getElementById("modal").classList.remove("flex")}document.getElementById("faqForm").addEventListener("submit",async n=>{n.preventDefault();const o=localStorage.getItem("token"),a=document.getElementById("faqId").value,t={question:document.getElementById("faqQuestion").value,answer:document.getElementById("faqAnswer").value,sort_order:document.getElementById("faqSort").value};a?(t.id=parseInt(a),await fetch("/api/admin/faq",{method:"PUT",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"},body:JSON.stringify(t)})):await fetch("/api/admin/faq",{method:"POST",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"},body:JSON.stringify(t)}),s(),d()});d();
