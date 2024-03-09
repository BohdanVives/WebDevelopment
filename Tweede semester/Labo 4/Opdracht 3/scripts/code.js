const setup = () => {
    let leeftijd = 34;
    let intrest = 0.12;
    let isGevaarlijk=true;
    let vandaag = new Date()
    const print = (message) => {
        console.log(message);
    }
    console.log(typeof leeftijd);
    console.log(typeof intrest);
    console.log(typeof isGevaarlijk);
    console.log(typeof vandaag);
    console.log(typeof print(leeftijd))
    console.log(typeof print(intrest))
    console.log(typeof print(isGevaarlijk))
    console.log(typeof print(vandaag))

        let tekst="Hello world";
    console.log( tekst.length);

    console.log(tekst.charAt(1))
    console.log(tekst[2])
}
window.addEventListener("load", setup);