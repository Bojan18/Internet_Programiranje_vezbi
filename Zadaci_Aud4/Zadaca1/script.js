function isString(input){
    if(Object.prototype.toString(input) === '[object String]')
        return true;
    else
        return false;
}