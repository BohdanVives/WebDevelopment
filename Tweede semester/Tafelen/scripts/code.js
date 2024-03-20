
const setup = () => {
    const idFocus = () =>{
        document.getElementById("aantal").focus()
    }
    document.getElementById("focus").addEventListener("click", idFocus)
}


const getal = () => {

    let number = document.getElementById("aantal").value;


    if (isNaN(number)) {
        alert("Voer alstublieft een geldig nummer in.");
        return;
    }


    document.getElementById("tafels").innerHTML = "";
     let tijd = new Date().toLocaleTimeString()


    let tafels = "<h2 class='title'>" + document.getElementById("time").innerText + ": " + tijd +"</h2>";

    for (let i = 1; i <= 10; i++) {
        let rijen
        if (i % 2 === 0) {
            rijen = 'rij'
        } else {
            rijen =''
        }
        let resultat = number * i;
        tafels += `<div class='row ${rijen}'><div class='cell'>${number} x ${i} = ${resultat}</div></div>`;
    }
    tafels += ""
    document.getElementById("tafels").innerHTML = tafels;
}
 let tabels = document.getElementById("tafels")
const verwijderAlleChildren = (tabels) => {
    while (tabels.firstChild) {
        tabels.removeChild(tabels.firstChild);
    }
}

document.getElementById("button").addEventListener("click", getal);


window.addEventListener("load", setup);
