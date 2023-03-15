function add(){
    let author = document.getElementById("author").value
    let project = document.getElementById("project").value
    let cost = document.getElementById("cost").value
    let table = document.getElementById("table")

    if(author == "" || project == "" || cost == ""){
        alert("Enter all fields.")
        return
    }

    else if(isNaN(cost)) {
        alert("Toa ne e broj")
        return
    }

    let row = table.insertRow(0)
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    let cell3 = row.insertCell(2)

    cell1.innerHTML = author
    cell2.innerHTML = project
    cell3.innerHTML = cost
    cell3.setAttribute("class", "cost")

    findSum()

}

function findSum(){
    let sum = 0;
    let x = document.getElementsByClassName("cost")
    for (let i = 0; i < x.length; i++) {
        sum += parseInt(x[i].innerHTML)
    }
    document.getElementById("rezultat").innerHTML = sum
}