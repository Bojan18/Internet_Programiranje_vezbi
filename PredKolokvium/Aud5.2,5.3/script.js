function add() {
    let author = document.getElementById("author").value
    let project = document.getElementById("project").value
    let cost = document.getElementById("cost").value
    let table = document.getElementById("table")

    if (author == "" || project == "" | cost == "") {
        alert("omfg..")
        return
    }

    if (isNaN(cost)) {
        alert("Vnesi broj dumbo");
        return
    }

    let row = table.insertRow(0)
    let cell1 = row.insertCell(0).innerHTML = author
    let cell2 = row.insertCell(1).innerHTML = project
    let cell3 = row.insertCell(2)
    let cell4 = row.insertCell(3)
    cell3.innerHTML = cost

    var btn = document.createElement("button")
    var t = document.createTextNode("Remove")
    btn.appendChild(t)
    cell4.setAttribute("onclick", "removeRow(this)")
    cell4.appendChild(btn)



    cell3.setAttribute('class', 'cost')

    addCost()
}

function addCost(){
    var costArray = document.getElementsByClassName('cost')
    var sum = 0
    for (var i = 0; i < costArray.length; i++) {
        sum += parseInt(costArray[i].innerHTML)
    }
    document.getElementById('result').innerHTML = sum
}

function removeRow(ref){
    tableRow = ref.parentNode.parentNode
    tr.removeChild(tr)
    addCost()
}