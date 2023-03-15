let numbers = prompt("Enter 3 numbers, seperated with a space, example: 1 2 3");

let parts = numbers.split(" ");

let x = parseInt(parts[0]);
let y = parseInt(parts[1]);
let z = parseInt(parts[2]);

let result = x + y + z;

if(result < 0)
    console.log("Знакот е -");
else
    console.log("Знакот е +");