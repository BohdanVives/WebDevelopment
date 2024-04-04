
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


const start = () => {
    let button = document.getElementById("button");
    button.classList.add("hidden")

    setInterval(volgendeFoto, global.MOVE_DELAY);


    let foto = document.getElementById("foto")
    foto.addEventListener("click", tellen)
}


const volgendeFoto = () =>{

    let field = document.getElementById("PlayField")
    let foto = document.getElementById("foto")

    let getal = Math.round(Math.random() * global.IMAGE_COUNT);
    let score = document.getElementById("aantal")


    if (getal < global.IMAGE_COUNT){
        verplaats();
        foto.src = global.IMAGE_PATH_PREFIX + getal + global.IMAGE_PATH_SUFFIX
    } else {
        console.log("Eror")
    }

}

const tellen = ()=> {
    let score = document.getElementById("aantal")
    global.score++
    score.textContent = "Score: " + global.score;
}
const verplaats = () => {
    let field = document.getElementById("PlayField")
    let foto = document.getElementById("foto")

    let x = Math.floor(Math.random() * (field.clientWidth - foto.width));
    let y = Math.floor(Math.random() * (field.clientHeight - foto.height));
    foto.style.marginLeft = x + "px";
    foto.style.marginTop = y + "px";
}
window.addEventListener("load", setup);