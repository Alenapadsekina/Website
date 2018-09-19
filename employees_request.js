let requestEmployees = new XMLHttpRequest();


requestEmployees.open('GET', 'http://localhost:8888/getEmployees', false);
//debugger;
requestEmployees.send();

if (requestEmployees.status === 200) {
    console.log(requestEmployees.responseText);
    let employees = JSON.parse(requestEmployees.responseText);
    populateEmployeesDropdown(employees);
};

function populateEmployeesDropdown(employees) {

    let employeesDropdown = document.getElementById("teamMembers");
    while (employeesDropdown.firstChild) {
        employeesDropdown.removeChild(employeesDropdown.firstChild);
    }

    for (let i = 0; i < employees.length; i++) {
        let option = document.createElement("option");
        option.text = employees[i].employee;
        option.value = employees[i].id;
        employeesDropdown.appendChild(option);
    }

}
