function add() {
    let name = document.getElementById("name").value
    let surname = document.getElementById("surname").value
    let mail = document.getElementById("mail").value
    let age = document.getElementById("age").value

    if(name == "" || surname == "" || age == "" || mail == ""){
        alert("Dubmas")
        return 
    }

    let person = "Gospdine " + name + " " + surname + " dali ste sigurni?"

    if(confirm(person))
        document.getElementById("disabled").value = "Podatocite se prateni"
    else
        document.getElementById("disabled").value = "Podatocite NE SE PRATENI!"

}