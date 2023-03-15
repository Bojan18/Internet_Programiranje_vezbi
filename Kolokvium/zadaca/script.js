function najavi() {
    let name = document.getElementById("nameSurname").value
    let oznakaNaLetlo = document.getElementById("oznakaNaLetalo").value
    let koordinati = document.getElementById("koordinatiNaLet").value
    let radius = document.getElementById("radiusNaLet").value
    let visina = document.getElementById("visinaNaLet").value
    let tip = document.getElementById("tipNaLetalo").value
    let result = document.getElementById("result").value
    let counterLetovi = 0;

    if (name == "" || oznakaNaLetlo == "" || koordinati == "" || radius == "" || visina == "" || tip == "") {
        alert("Ve molam vnesete gi site polinja.")
        return
    }

    else if (isNaN(oznakaNaLetlo.substring(7, 11)) || oznakaNaLetlo.length != 11) {
        alert("Nevalidna oznaka na letalo")
        return
    }

    else if(radius > 500){
        alert("Radiusot treba da ima maksimalna vrednost od 500")
        return
    }
    else if(visina > 150){
        alert("Висината на летот не треба да надминува 150 метри")
        return
    }

    //Z3-UNR-1234
    //012345678910


    let lista = document.getElementById("listRegistrirani")
    let listItem = document.createElement('li')
    let div = document.createElement('div')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')

    let potvrdi = document.createElement('button')
    potvrdi.innerHTML = 'Potvrdi'
    potvrdi.onclick = function(){
        div.style.backgroundColor = "lightgreen"
        div.style.border = '1px solid black'
        result.innerHTML = counterLetovi
    }
    let otkazi = document.createElement('button')
    otkazi.innerHTML = 'Otkazi'
    otkazi.onclick = function (){
        listItem.remove()
    }

    let breakLine = document.createElement('br')
    let pText1 = document.createTextNode(name + ',' + oznakaNaLetlo)
    let pText2 = document.createTextNode("Радиус: " + radius + ',' + "Висина: " + visina)
    let pText3 = document.createTextNode(" "+ tip)

    p1.appendChild(pText1)
    p1.appendChild(breakLine)
    p2.appendChild(pText2)
    p2.appendChild(breakLine)
    p3.appendChild(pText3)
    p3.appendChild(breakLine)

    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(p3)
    div.appendChild(breakLine)

    div.appendChild(potvrdi)
    div.appendChild(otkazi)

    listItem.appendChild(div).style.width = "300px"

    lista.appendChild(listItem)


    console.log(counterLetovi)

}