var ost0 = 0, ost1 = 0, ost2 = 0;
var x = prompt("Vnesete broj");

x = parseInt(x);

while(!isNaN(x)){
    if (x % 3 == 0){
        ost0++;
    }
    else if(x % 3 == 1){
        ost1++;
    }
    else if(x % 3 == 2){
        ost2++;
    }

    x = prompt("Vnesete broj");
    x = parseInt(x);
}

document.write("Vnesovte " + ost0 + " broevi koi pri delenje so 3 imaat ostatok 0");
document.write("<br>");
document.write("Vnesovte " + ost1 + " broevi koi pri delenje so 3 imaat ostatok 1");
document.write("<br>");
document.write("Vnesovte " + ost2 + " broevi koi pri delenje so 3 imaat ostatok 2");