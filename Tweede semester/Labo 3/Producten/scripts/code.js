const setup = () => {
    function herbereken() {
        let subtotaalElems = document.getElementsByClassName('subtotaal');
        let aantalElems = document.getElementsByClassName('aantal');
        let prijsElems = document.getElementsByClassName('prijs');
        let btwElems = document.getElementsByClassName('btw');

        let totaal = 0;

        for (let i = 0; i < subtotaalElems.length; i++) {
            let aantal = parseInt(aantalElems[i].value);
            let prijsString = prijsElems[i].textContent.trim();
            let prijs = parseFloat(prijsString);
            let btwString = btwElems[i].textContent.trim();
            let btwPercentage = parseFloat(btwString) / 100;

            let subtotaal = aantal * prijs * (1 + btwPercentage);
            subtotaalElems[i].textContent = subtotaal.toFixed(2) + ' Eur';

            totaal += subtotaal;
        }

        document.getElementById('total').textContent = totaal.toFixed(2) + ' Eur';
    }

    // Voeg een event listener toe aan de knop "Herbereken"
    document.getElementById('herberekenButton').addEventListener('click', herbereken);
};

// Wacht tot de pagina geladen is en voer de setup-functie uit
window.addEventListener("load", setup);
