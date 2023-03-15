var osnova = prompt("Vnesete ja osnovata");
var eksponent = prompt("Vnesete go eksponentot");

osnova = parseInt(osnova);
eksponent = parseInt(eksponent);

var i, y;

if(!isNaN(osnova) && !isNaN(eksponent)){
    for(i = 0, y = eksponent;i < eksponent;i++){
        eksponent *= y;
    }
    document.write(y + " ^ " + eksponent + " = " + osnova);
}
else{
    document.write("Vnesete broj sledniot pat!")
}