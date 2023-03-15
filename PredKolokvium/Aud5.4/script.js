function add(){
    let num = document.getElementById("numEl").value
    let type = document.getElementById("type").value
    let div = document.getElementById("DIV")


    for (let i = 0; i < num; i++) {
        let x = document.createElement('input')

        if(type == "Radio")
            x.type = "radio"
        else if(type == "Checkbox")
            x.type = "checkbox"

        div.appendChild(x)
    }

}