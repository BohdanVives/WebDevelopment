const setup = () => {
    const kip = () => {
        let ei = document.getElementById("Ei").value;
        let element = document.getElementById("img");

        if (ei === "met-een-ei") {
            element.classList.remove("hidden");
            element.id = "img-with-egg";
            let Kipmetei = `<div class="img-with-egg"></div>`;

            document.body.innerHTML += Kipmetei;
        } else if (ei === "zonder-een-ei") {
            element.classList.remove("hidden");
            element.id = "img-hidden";
            let Kipzonderei = `<div class="img-without-egg"></div>`;

            document.body.innerHTML += Kipzonderei;
        } else {
            return null;
        }
    }

    const index = document.getElementById("iets");
    const zoeken = (index) => {
        let resultat = 0;
        let zoekIndex = index.value.lastIndexOf("an");
        while (zoekIndex !== -1) {
            resultat++;
            zoekIndex = index.value.lastIndexOf("an", zoekIndex - 1);
        }
        console.log("Aantal keer 'an' gevonden: ", resultat);
    }

    kip();
    zoeken(index);
}

window.addEventListener("load", setup);
