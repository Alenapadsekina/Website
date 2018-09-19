let request = new XMLHttpRequest();


request.open('GET', 'http://localhost:8888/getTeams', false);
//debugger;
request.send();

if (request.status === 200) {
    console.log(request.responseText);
    let employees = JSON.parse(request.responseText);
    populateTeamMembers(employees);
};

function populateTeamMembers(employees) {

    let employeesDropdown = document.getElementById("teamMembers");
    while (employeesDropdown.firstChild) {
        employeesDropdown.removeChild(employeesDropdown.firstChild);
    }

    for (let i = 0; i < teams.length; i++) {
        let option = document.createElement("option");
        option.text = teams[i].team;
        option.value = teams[i].id;
        employeesDropdown.appendChild(option);
    }



}
