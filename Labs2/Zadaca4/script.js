function soberi(){

    let prvRealen = document.getElementById("prvRealen").value
    let prvImaginaren = document.getElementById("prvImaginaren").value
    let vtorRealen = document.getElementById("vtorRealen").value
    let vtorImaginaren = document.getElementById("vtorImaginaren").value

    document.getElementById("rezultatRealni").value = parseInt(prvRealen) + parseInt(vtorRealen)
    document.getElementById("reziltatImaginarni").value = parseInt(prvImaginaren) + parseInt(vtorImaginaren)

}