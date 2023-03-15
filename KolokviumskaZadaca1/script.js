function add() {
    let name = document.getElementById("name");
    name = name.value
    let surname = document.getElementById("surname");
    surname = surname.value
    let embg = document.getElementById("embg");
    embg = embg.value

    //embg = dd mm yyy XXXXXX
    if(embg.length != 13)
        alert("Please enter a valid embg");



    console.log(name + " " + surname + " " + embg);
}