
var a = prompt("Vnesete broj za a");
var b = prompt("Vnesete broj za b");

a = parseInt(a);
b = parseInt(b);

if(!isNaN(a) && !isNaN(b)){
    if(a > b){
        document.write("Brojot a e pogolem = " + a);
    }
    else{
        document.write("Brojot b e pogolem = " + b);
    }
}
else{
    document.write("Ne ste vnesile broj");
}