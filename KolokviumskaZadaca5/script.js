function postavi(){
    let specs = document.getElementById("specs").value
    let niza = specs.split(',')
    let newDivs = document.getElementById("newDivs")

    let bgColor = niza[0]
    let widthOfNewDiv = parseInt(niza[1])
    let heightOfNewDic = parseInt(niza[2])
    let nameOfNewDiv = niza[3]

    let newDiv = document.createElement('div')
    let newP = document.createElement('p')
    let textForP = document.createTextNode(niza[3])

    newDiv.style.backgroundColor = bgColor
    newDiv.style.width = widthOfNewDiv + "px"
    newDiv.style.height = heightOfNewDic + "px"


    newP.appendChild(textForP)
    newP.style.textAlign = 'center'
    newDiv.appendChild(newP)
    newDivs.appendChild(newDiv)


    console.log(niza[0] + niza[1] + niza[2] + niza[3])
}