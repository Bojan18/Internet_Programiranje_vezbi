let number = prompt("Enter your phone number.");

//071 XYZ XYZ
let subString = number.substring(0, 3);
let subString2 = number.substring(3, 6);
let subString3 = number.substring(6, );

let operator;

if (subString === "070" || subString == "071" || subString == "072") {
    operator = "T-mobile";
}
    else if (subString == "075" || subString == "076")
        operator = "One";
    else if (subString == "077" || subString == "078")
        operator = "Vip";
    else{
        operator = "Operator not found.";
    }


let fullNumberAndOperator = subString + '/' + subString2 + '-' + subString3 + ' - ' + operator;
console.log(fullNumberAndOperator);
