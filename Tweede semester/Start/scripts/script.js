const setup = () => {
    const kip = () => {
        let ei = document.getElementById("Ei");
        let element = document.getElementById("img");
        ei.addEventListener('change', () => {
            console.log(ei.value)
            if (ei.value === "met-een-ei") {
                element.classList.remove("hidden")
                element.classList = "with-egg";
            } else if (ei.value === "zonder-een-ei") {
                element.classList.remove("hidden")
                element.classList.remove("with-egg")
            } else {
                return null;
            }
        });

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
