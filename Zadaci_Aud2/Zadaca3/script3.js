var x = prompt("Vnesi vrednost na x tocka");
x = parseInt(x);
var y = prompt("Vnesi vrednost na y tocka");
y = parseInt(y);

if(!isNaN(x) && !isNaN(y)){
    if (x > 0){
        if(y > 0){
            document.write("I kvadrant\n");
        }
        else if(y < 0){
            document.write("IV kvadrant\n");
        }
        else{
            document.write("Pozitivna x oska\n");
        }
    }
    else if(x < 0){
        if(y > 0){
            document.write("II kvadrant\n");
        }
        else if(y < 0){
            document.write("III kvadrant\n");
        }
        else{
            document.write("Negativna x oska\n");
        }
    }
    else{
        if(y > 0)
            document.write("Pozitivna y oska.\n");
        else if(y < 0)
            document.write("Negativna y oska.\n");
        else
            document.write("Koordinaten pocetok\n")
    }
}
else{
    document.write("Ne ste vnesile broj\n");
}