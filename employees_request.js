

function populateEmployeesDropdown(teamId) {
  let requestEmployees = new XMLHttpRequest();

  let params = 'teamId=' + encodeURIComponent(teamId);

  requestEmployees.open('GET', 'http://localhost:8888/getEmployees?' + params, false);
  //debugger;
  requestEmployees.send();

  if (requestEmployees.status === 200) {
//      console.log(requestEmployees.responseText);
      let employees = JSON.parse(requestEmployees.responseText);
      let employeesDropdown = document.getElementById("teamMembers");
      while (employeesDropdown.firstChild) {
          employeesDropdown.removeChild(employeesDropdown.firstChild);
          };
      let defaultEmployeeOption = document.createElement("option");
//      defaultEmployeeOption.text = null;
//      defaultEmployeeOption.value = null;
      employeesDropdown.appendChild(defaultEmployeeOption);
      for (let i = 0; i < employees.length; i++) {
          let option = document.createElement("option");
          option.text = employees[i].employee;
          option.value = employees[i].id;
          employeesDropdown.appendChild(option);
        }
  };
