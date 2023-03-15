function dodadi(){
    let div = document.getElementById('inputi')
    let table = document.getElementById('table')

    let izbrisiButton = document.createElement('button')
    izbrisiButton.innerHTML = 'Izbrisi'
    izbrisiButton.onclick = function izbrisi1(){

    }


    div.appendChild(divSecond)
    divSecond.appendChild(novInput)
    divSecond.appendChild(izbrisiButton)
    divSecond.setAttribute('class', 'divovi')
}

function izbrisi(){
}