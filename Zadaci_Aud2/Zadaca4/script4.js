var poeni = prompt("Vnesete gi vasite poeni");
var ocenka = 0;
poeni = parseInt(poeni);

if(!isNaN(poeni)){
    if(poeni >= 0 && poeni <= 50){
        ocenka = 5;
    }
    else if(poeni >= 51 && poeni <= 60){
        ocenka = 6;
    }
    else if(poeni >= 61 && poeni <= 70){
        ocenka = 7;
    }
    else if(poeni >= 71 && poeni <= 80){
        ocenka = 8;
    }
    else if(poeni >= 81 && poeni <= 90){
        ocenka = 9;
    }
    else if(poeni >= 91 && poeni <= 100){
        ocenka = 10;
    }
    else{
        document.write("Ne ste vnesile tocen broj na poeni, vnesete od 0 do 100");
    }
    if(ocenka){
        document.write("Vasata ocenka e: " + ocenka)
    }
}
else{
    document.write("Ne ste vnesile broj");
}