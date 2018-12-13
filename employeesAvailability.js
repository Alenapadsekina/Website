function generateReport() {
    let membersDropdown = document.getElementById("teamMembers");
    let membersDropdownValue = membersDropdown.value;
    let selectedEmployee = membersDropdown.options[membersDropdown.selectedIndex];
    let group = [];
    if (selectedEmployee.text === "") {
        for (let i = 1; i < membersDropdown.length; i++) {
            group.push(membersDropdown.options[i]);
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

            nameCell.innerHTML = group[i].text;
            statusCell.innerHTML = group[i].value;
        }

        let headerRow = table.insertRow(0);
        headerRow.innerHTML = "Employee's availability";
        headerRow.classList.add("headerRow");
    }




/*
 */



/*







let errorMessage;






    let oldError = document.getElementById("errorMessage");
    while (oldError.firstChild) {
        oldError.removeChild(oldError.firstChild);
    }

    function showError(errorMessage) { // create error message
        let error = document.createTextNode(errorMessage);
        let div = document.getElementById("errorMessage");
        div.appendChild(error);
        div.classList.add("errorMessage");
        console.log("error OK");
    }


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
*/
