let paren = " е парен број.";
let neparen = " е непарен број.";

for(var i = 0;i <= 30;i++){
    if(i % 2 == 0) {
        document.write(i + paren + "<br>");
    }
    else
        document.write(i + neparen + "<br>");
}