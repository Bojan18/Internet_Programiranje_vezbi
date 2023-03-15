function send(){
    let name = document.getElementById("name").value
    let surname = document.getElementById("surname").value
    let mail = document.getElementById("mail").value
    let age = document.getElementById("age").value

    let person = "Gospodine " + name + " " + surname + " " + "dali ste sigurni"

    if(confirm(person))
        document.getElementById("rez").value = "Podatocite se prateni"
    else
        document.getElementById("rez").value = "Podatocite ne se prateni"

}