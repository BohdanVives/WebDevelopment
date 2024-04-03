
let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "fotos/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};
const setup = () => {
let begin = document.getElementById("button");
begin.addEventListener("click", () => {
    setTimeout(start, global.MOVE_DELAY);
});
}


const start = () =>{
    let button = document.getElementById("button");
    button.classList = "hidden"

    let foto = document.getElementById("foto")
    let timer = setInterval(volgendeFoto, global.MOVE_DELAY)
    foto.addEventListener("click", timer);
}

const volgendeFoto = () =>{
    let fotos = document.getElementById("foto")
    let getal = Math.random() * global.IMAGE_COUNT;
    let score = document.getElementById("aantal")
    if (getal <= global.IMAGE_COUNT){
        let image = global.IMAGE_PATH_PREFIX + getal + global.IMAGE_PATH_SUFFIX;
        fotos.src = image
        global.score++
        score.append(global.score)
    } else {
        console.log("Error")
    }
}
window.addEventListener("load", setup);