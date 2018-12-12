let requestForTeams = new XMLHttpRequest();


requestForTeams.open('GET', 'http://localhost:8888/getTeams', false);
//debugger;
requestForTeams.send();

if (requestForTeams.status === 200) {
    console.log(requestForTeams.responseText);
    let teams = JSON.parse(requestForTeams.responseText);
    populateTeamsDropdown(teams);
};

function populateTeamsDropdown(teams) {

    let teamsDropdown = document.getElementById("teams");
    while (teamsDropdown.firstChild) {
        teamsDropdown.removeChild(teamsDropdown.firstChild);
    }
    let defaultTeamsOption = document.createElement("option");
    defaultTeamsOption.text = "";
    defaultTeamsOption.value = null;
    teamsDropdown.appendChild(defaultTeamsOption);
    for (let i = 0; i < teams.length; i++) {
        let option = document.createElement("option");
        option.text = teams[i].team;
        option.value = teams[i].id;
        teamsDropdown.appendChild(option);
    }



}
