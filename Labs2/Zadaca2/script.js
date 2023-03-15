
//nemozev da gi otvoram dvete sliki, pa zatoa dodadov moi :)

function makePictureVisible() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);

    if (randomNum == 1) {
        document.getElementById("pic1").style.display = 'block';
        console.log("it works 1")
    }
    if (randomNum == 2) {
        document.getElementById("pic2").style.display = 'block';
        console.log("it works 2")
    }
    if (randomNum == 3) {
        document.getElementById("pic3").style.display = 'block';
        console.log("it works 3")
    }
}