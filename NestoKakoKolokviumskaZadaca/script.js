function validEmail(email) {
    if (!email.includes('@'))
        return false;
}

function validPayment(payment) {
    if (isNaN(payment))
        return false;
}

function validNameSurname(s) {
    if (!isNaN(s)) {
        return false;
    }
}

function sumPayment() {
    var payCells = document.getElementsByClassName('payment')
    var sum = 0;
    var counter = 0;
    for (var i = 0; i < payCells.length; i++) {
        sum += parseInt(payCells[i].innerHTML);
        ++counter;
    }
    document.getElementById('sumPayments').innerHTML = sum;
    document.getElementById('sumPaymentsAVG').innerHTML = sum / counter;
}

function add() {

    let name = document.getElementById("name");
    name = name.value
    let surname = document.getElementById("surname");
    surname = surname.value
    let payment = document.getElementById("payment");
    payment = payment.value
    let email = document.getElementById("email");
    email = email.value

    if (name == "" || surname == "" || email == "" || payment == "")
        alert("Please enter all fields");
    if (validPayment(payment) == false)
        alert("Please enter an amount.")
    else if (validNameSurname(name) == false || validNameSurname(surname) == false)
        alert("Please enter a valid name/surname")
    else if (validEmail(email) == false)
        alert("Not a valid e-mail, please enter a valid one.");
    else {

        let startMail = email.indexOf('@');
        let endMail = email.indexOf('.')
        let subMail = email.substring(startMail + 1, endMail);


        let table = document.getElementById("table")
        let row = table.insertRow(table.rows.length);
        var cell1 = row.insertCell(0);
        cell1.innerHTML = name;
        var cell2 = row.insertCell(1);
        cell2.innerHTML = surname;
        var cell3 = row.insertCell(2);
        cell3.innerHTML = subMail[0].toUpperCase() + subMail.slice(1,);
        var cell4 = row.insertCell(3);
        cell4.innerHTML = payment;

        cell4.setAttribute('class', 'payment');
        sumPayment();

    }
}