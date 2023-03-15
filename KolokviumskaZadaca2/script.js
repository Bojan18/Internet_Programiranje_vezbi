function proveri(){
    let inputNumber = document.getElementById("inputNumber").value

    if(inputNumber == "") {
        alert("Vnesi number")
        return
    }

    else if(isNaN(inputNumber)){
        alert("Vnesi broj")
        return
    }
    else if(inputNumber.length != 10){
        alert("Vnesi 10 cifren broj")
        return
    }
}

function takeFirstPutLast(){
    let inputNumber = document.getElementById("inputNumber").value
    proveri()

    let firstChar = inputNumber.charAt(0)
    document.getElementById("inputNumber").value = inputNumber.substring(1, ) + firstChar
}

function takeLastPutFirst(){
    let inputNumber = document.getElementById("inputNumber").value
    proveri()

    let lastChar = inputNumber.charAt(inputNumber.length-1)
    document.getElementById("inputNumber").value = lastChar + inputNumber.substring(0, 9)

    //12345 = 5 1234

}

function flipNumber(){
    
}