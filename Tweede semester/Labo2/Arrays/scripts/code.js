const setup = () => {
}
window.addEventListener("load", setup);


const familie =['John', 'Anna', 'Rebeka' ,'Buster', 'Vova'];
console.log('Aantal mensen in de familie' + familie.length);
console.log(familie[0]);
console.log(familie[2]);
console.log(familie[4]);
function voegNaamToe(nieuweNaam) {
    familie.push(nieuweNaam);
}
let nieuweNaam = prompt("Voer een nieuwe naam in:");
voegNaamToe(nieuweNaam);

console.log("Array na toevoegen van nieuwe naam: " + familie);

let arrayString = familie.join(', ');
console.log("Array geconverteerd naar string: " + arrayString);
console.log(familie)