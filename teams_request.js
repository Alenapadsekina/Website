var request = new XMLHttpRequest();


request.open('GET', 'http://localhost:8888/getTeams', false);
//debugger;
request.send();

if (request.status === 200) {
    console.log(request.responseText);
    let teams = JSON.parse(request.responseText);
    populateTeams(teams);
};

function populateTeams(teams) {

    var teamsDropdown = document.getElementById("teams");
    while (teamsDropdown.firstChild) {
        teamsDropdown.removeChild(teamsDropdown.firstChild);
    }

    for (var i = 0; i < teams.length; i++) {
        var option = document.createElement("option");
        option.text = teams[i].team;
        option.value = teams[i].id;
        teamsDropdown.appendChild(option);
    }



}
