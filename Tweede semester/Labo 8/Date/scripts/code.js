const setup = () => {
    var date = new Date(2005, 0, 1)
    var andereDate = new Date()

    console.log(date)
    console.log(andereDate)

    var verschill = andereDate - date;

    var resultat = Math.floor(verschill/(1000*60*60*24))

    console.log(resultat)
    let total = document.getElementById("resultat")
    total.innerText = resultat
}
window.addEventListener("load", setup);