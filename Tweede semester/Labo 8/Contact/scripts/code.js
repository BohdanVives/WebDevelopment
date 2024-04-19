

let global ={
    option: 0
}
let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    let selectElement = document.getElementById("lstPersonen")

    let selectedIndex = selectElement.selectedIndex

    if(selectedIndex === global.option){
        selectElement.remove(selectedIndex)
        personen.splice(selectedIndex,1)
    }


  if (!valideer()){
      console.error("fgfg")
      return;
  }
    // valideer alle input data en controleer of er geen errors meer zijn

        let voornaam = document.getElementById("txtVoornaam").value;
        let familienaam = document.getElementById("txtFamilienaam").value;
        let geboorteDatum = document.getElementById("txtGeboorteDatum").value;
        let email = document.getElementById("txtEmail").value;
        let aantalKinderen = document.getElementById("txtAantalKinderen").value;
            let personInfo = [voornaam, familienaam, geboorteDatum, email,aantalKinderen]
            console.log(personInfo)

            personen.push(personInfo)
            console.log(personen)
            let lijst = document.getElementById("lstPersonen")
            let rij = document.createElement('option')
            let naam = voornaam + " " + familienaam;

            rij.append(naam);
            lijst.append(rij);
            clearAllErrors()

    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten

};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    let empty = document.getElementsByTagName('input')
    for (let i = 1; i < empty.length-1;i++){
        empty[i].value = "";
    }
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};



// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", (event) => {
        let index = lstPersonen.selectedIndex;
        console.log(index)
        let persoon = personen[index]
        document.getElementById("txtVoornaam").value = persoon[0];
        document.getElementById("txtFamilienaam").value = persoon[1];
        document.getElementById("txtGeboorteDatum").value = persoon[2];
        document.getElementById("txtEmail").value = persoon[3];
        document.getElementById("txtAantalKinderen").value = persoon[4];
        global.option = index
        console.log(global.option)
    })

    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);