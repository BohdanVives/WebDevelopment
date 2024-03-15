const setup = () => {
    const gemeenteKiezen = document.getElementById("gemeente");
    const Gemeenten = [];

    const schrijfGemeente = () => {
        const gemeente = prompt("Voeg een nieuwe gemeente toe");
        if (gemeente && gemeente.toLowerCase() !== "stop") {
            Gemeenten.push(gemeente);
            Gemeenten.sort((a, b) => a.localeCompare(b));
            refreshGemeente();
            schrijfGemeente();
        } else if (gemeente === null) {
            alert("Error: " + Gemeenten.join("\n"));
        } else {
            alert("Gemeenten:\n" + Gemeenten.join("\n"));
        }
    };

    const refreshGemeente = () => {
        gemeenteKiezen.innerHTML = Gemeenten.map(gemeente => `<option>${gemeente}</option>`).join('');
    };

    schrijfGemeente();
};

window.addEventListener("load", setup);
