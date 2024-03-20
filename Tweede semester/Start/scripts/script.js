const setup = () => {
    const kip = () => {
        let ei = document.getElementById("Ei").value;
        let element = document.getElementById("img");

        if (ei === "met-een-ei") {
            element.classList.remove("hidden");
            element.id = "img-with-egg";
            element.innerHTML = ""; // Wis inhoud van het element voordat je HTML toevoegt
            let div = document.createElement("div");
            div.classList.add("img-with-egg");
            element.appendChild(div);
        } else if (ei === "zonder-een-ei") {
            element.classList.remove("hidden");
            element.id = "img-hidden";
            element.innerHTML = ""; // Wis inhoud van het element voordat je HTML toevoegt
            let div = document.createElement("div");
            div.classList.add("img-without-egg");
            element.appendChild(div);
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
