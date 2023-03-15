let string = prompt("Enter your string");

let parts = string.split(" ");
let longestSubString = parts[0];
for(var i = 0;i < parts.length;i++){
    if(parts[i].length > longestSubString.length){
        longestSubString = parts[i];
    }
}

console.log(longestSubString + " is the longest string.");