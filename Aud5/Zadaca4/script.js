function add() {
    let numOfElements = document.getElementById("number").value
    let option = document.getElementById("option").value
    let div = document.getElementById("firstDiv")

    if (isNaN(numOfElements)) {
        alert("dumbass")
        return
    }


    for (let i = 1; i <= parseInt(numOfElements); i++) {
        let x = document.createElement('input')

        if (option == "Radio")
            x.type = "radio"
        else if(option == "Checkbox")
            x.type = "checkbox"

        div.appendChild(x)
    }
}