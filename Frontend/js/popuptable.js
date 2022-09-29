let tbody = document.getElementById("tbody")

      // fetch function
      fetch("http://localhost:3000/persons")
          .then(res => res.json())
          .then(json => {
              json.map(data => {
                  console.log(data);
                  tbody.append(td_fun(data));
              })
          })

      // create td
      function td_fun({PersonID,FirstName,LastName,Availability}){
          let td = document.createElement('tr');
          td.innerHTML = `
          <td class="px-6 py-4 whitespace-nowrap">
                 <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                     ${PersonID}
                 </div>
          </td><td class="px-6 py-4 whitespace-nowrap">
          <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                    ${FirstName}
                </div>
            </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">
                ${LastName}
            </div>
           </td>
          
          <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                ${Availability}
              </span>
          </td>
          `;
          return td;
      }