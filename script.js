function showPage(pageId) {
    document.querySelectorAll("section").forEach(section => {
        section.classList.remove("active");
    });
    document.getElementById(pageId).classList.add("active");
}

let teamCount = 1;
function addTeam() {
    const input = document.getElementById("teamName");
    const name = input.value.trim();
    if (name === "") {
        alert("Please enter a team name.");
        return;
    }
    teamCount++;
    const table = document.getElementById("teamTable");
    const row = table.insertRow();
    row.insertCell(0).textContent = "TM" + String(teamCount).padStart(3, "0");
    row.insertCell(1).textContent = name;
    row.insertCell(2).textContent = "Active";
    input.value = "";
}