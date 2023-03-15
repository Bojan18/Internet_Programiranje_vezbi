var godina = prompt("Vnesete ja godinata");

godina = parseInt(godina);

if(!isNaN(godina)){
    if((godina % 4 == 0 && godina%100 != 0) || godina%400 == 0){
        document.write("Godinata " + godina + " e prestapna")
    }
    else{
        document.write("Godinata " + godina + " NE e prestapna");
    }
}
else{
    document.write("Ne ste vnesele godina");
}