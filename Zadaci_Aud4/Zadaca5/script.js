function insert(mainString, insString, pos){
    if(typeof(pos) == 'undefined')
        pos = 0;
    if(typeof(insString) == 'undefined'){
        insString = "";
    }
    return mainString.slice(1, pos) + insString + mainString.slice(pos);
}