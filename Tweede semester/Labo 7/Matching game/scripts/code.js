let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    index: 0,
    flag: -1,
    src1: " ",
    scr2: " "
};
const afbeeldingen = ['kaart1.jpeg', 'kaart2.jpeg', 'kaart3.jpeg', 'kaart4.jpeg', 'kaart5.jpeg', 'kaart6.jpeg'];

const setup = () => {
let begin = document.getElementById("start")
    begin.addEventListener("click", voegKaartToe)
}

const voegKaartToe = () => {
    let game = document.getElementById("spel");

    for (let i = 0; i < (afbeeldingen.length * 2); i++) {
        let cards = document.createElement('div');

        let card = document.createElement('img');

        card.src = 'fotos/achterkant.jpeg';
        card.id = i;
        card.classList.add('card')
        cards.classList.add('display')
        card.addEventListener("click",kaartKiezen)

        cards.appendChild(card);
        game.appendChild(cards);
    }
}

const kaartKiezen = (kaart) =>{
    let card= kaart.target;

    if (card.tagName.toLowerCase() === 'img') {
        if(global.flag === -1){
           global.src1 = kaartOmdraaien(card);
           global.flag++;
        } else if( global.flag === 0) {
            global.src2 =   kaartOmdraaien(card);
            global.flag++;
        } else {
            global.flag = -1;
            if(global.src1.src !== global.src2.src){
                let spel = document.getElementById("spel")
                let parents = spel.querySelectorAll('div')
                parents.forEach(parent => {
                    let child = parent.querySelector('img');
                    if(Number(child.id) !== -1){
                        child.src = 'fotos/achterkant.jpeg';
                    }
                });
            } else {
                global.src1.id = -1;
                global.src2.id = -1;
            }
        }

    }
}

const kaartOmdraaien = (kaart) =>{
    let newArray = afbeeldingen.concat(afbeeldingen)
    if(kaart.src.includes('achterkant.jpeg')){
        kaart.src = 'fotos/' + newArray[Number(kaart.id)];
    }
    return kaart
}

window.addEventListener("load", setup);