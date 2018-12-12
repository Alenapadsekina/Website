function generateReport() {
    let membersDropdown = document.getElementById("teamMembers");
    let membersDropdownValue = membersDropdown.value;
    let selectedEmployee = membersDropdown.options[membersDropdown.selectedIndex].text;
    let group = [];
    if (selectedEmployee === "") {
        for (let i = 1; i < membersDropdown.length; i++) {
            group.push(membersDropdown.options[i].text);
        }
    } else {
        group.push(selectedEmployee);
    }
    console.log(group);

    let oldTable = document.getElementById("reportTable"); // erase the previously created table or error message
      while (oldTable.firstChild) {
          oldTable.removeChild(oldTable.firstChild);
      };


    let table = document.getElementById("reportTable");
    for (let i = 0; i < group.length; i++) {

    let row = table.insertRow(i);
    let nameCell = row.insertCell(0);
    let statusCell = row.insertCell(1);

    nameCell.innerHTML = group[i];
    let person = group[i].split(" ");
        if (person[1].length % 2 == 0) {
            statusCell.innerHTML = "Available";
            statusCell.classList.add("available");
        } else {
            statusCell.innerHTML = "Not available";
            statusCell.classList.add("notAvailable");
        }
      }

    let headerRow = table.insertRow(0);
    headerRow.innerHTML = "Employee's availability";
    headerRow.classList.add("headerRow");

}
/*
  */



/*







function createTable() { // create a table corresponding to the selected team
    console.log("inside create table");

    let table = document.getElementById("reportTable");
    for (let i = 0; i < group.length; i++) {
        let row = table.insertRow(i);
        let nameCell = row.insertCell(0);
        let statusCell = row.insertCell(1);
        nameCell.innerHTML = group[i].name;
        let person = group[i].name.split(" ");
        if (person[1].length % 2 == 0) {
            statusCell.innerHTML = "Available";
            statusCell.classList.add("available");
        } else {
            statusCell.innerHTML = "Not available";
            statusCell.classList.add("notAvailable");
        }
    }
    let headerRow = table.insertRow(0);
    headerRow.innerHTML = "Employees availability";
    headerRow.classList.add("headerRow");
}




let errorMessage;

function showError(errorMessage) { // create error message
    let error = document.createTextNode(errorMessage);
    let div = document.getElementById("errorMessage");
    div.appendChild(error);
    div.classList.add("errorMessage");
    console.log("error OK");
}




function generateReport() { // show report: a table or error message
let oldTable = document.getElementById("reportTable"); // erase the previously created table or error message
  while (oldTable.firstChild) {
      oldTable.removeChild(oldTable.firstChild);
  }
    let oldError = document.getElementById("errorMessage");
    while (oldError.firstChild) {
        oldError.removeChild(oldError.firstChild);
    }

    console.log("clean old result OK");

    switch (document.getElementById("teams").value) {
        case "":
            showError("Please define a team");
            break;
        case "HTML5/IFE":
        case "Main releases":
        case "CBC":
            createTable();
            console.log("create table OK");
            break;
        default:
            showError("No data found");
            break;
    }
}



{"id": 0, "teamId": 1, "employee": ""},
{"id": 1, "teamId": 2, "employee": ""},
{"id": 2, "teamId": 3, "employee": ""},




*/
