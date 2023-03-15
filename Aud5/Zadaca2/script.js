function add() {
    let author = document.getElementById("author").value
    let project = document.getElementById("project").value
    let cost = document.getElementById("cost").value
    let table = document.getElementById("table")

    if (author == "" || project == "" || cost == "") {
        alert("i oti ne gi popunes site??")
        return
    } else if (isNaN(cost)) {
        alert("zaebavas le se...")
        return
    }
    let row = table.insertRow(0)
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    let cell3 = row.insertCell(2)
    cell1.innerHTML = author
    cell2.innerHTML = project
    cell3.innerHTML = cost

}