const setup = () => {
    const resultaat = document.getElementById("resultaat")
    resultaat.addEventListener("click", () => {
    const roker = document.getElementById("roker").checked;
    const moedertaal = document.querySelector('input[name="taal"]:checked').value;
    const favoritebuurland = document.getElementById("buurland").value;
    const food = document.getElementById("food").selectedOptions;
    const bestelling = [];
    for (let i = 0; i < food.length; i++) {
        bestelling.push(food[i].value);
    }
    if(roker){
        console.log("Is roker:", roker);
    } else {
        console.log("Is geen roker")
    }
    console.log("Moedertaal:", moedertaal);
    console.log("Favoriete buurland:", favoritebuurland);
    console.log("Bestelling:", bestelling);

});
}

window.addEventListener("load", setup);
