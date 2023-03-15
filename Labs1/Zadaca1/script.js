let num = prompt("Enter a three digit number");

//незнаев како да печатам, па печатев со console.log :)
function reverse(num){
    return num.split('').reverse().join('');
}
let reversed_num = parseInt(reverse(num));

    if (num > 99 && num < 999) {
        if (num == reversed_num) {
            console.log(num + " is a palindrome");
        }
        else
            console.log(num + " is not a palindrome")
    }
    else{
        console.log(num + " is not a three digit number...")
    }