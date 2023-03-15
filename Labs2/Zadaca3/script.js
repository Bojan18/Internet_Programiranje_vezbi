document.getElementById("name").innerHTML = "Bojan";
document.getElementById("index").innerHTML = "203213";
document.getElementById("hometown").innerHTML = "Vinica";

let bodyto = document.getElementsByTagName("body");

document.body.style.fontFamily = "Arial";

let x = document.getElementsByTagName("li");

for(let i = 0;i < x.length;i++){
    x[i].style.backgroundColor = "red";
}

