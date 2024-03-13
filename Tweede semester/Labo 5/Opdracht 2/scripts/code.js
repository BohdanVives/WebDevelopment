const setup = () => {
    let text = "Gisteren zat de jongen op de stoep en at de helft van de appel";

    let worden = text.toLowerCase().split(" ");
    for(let i = 0; i < worden.length; i++){
        if(worden[i] === "de"){
            worden[i] = "het"
        }
    }
       let nieuweText = worden.join(" ").trim();
    console.log(nieuweText)


    let zin = "de man riep de";
    let word = zin.toLowerCase().split(" ");

    for (let i = 0; i < word.length; i++){
        if(word[i] === "de"){
            word[i] = "het"
        }
    }
    let niueweZin = word.join(" ").trim();
    console.log(niueweZin)
}
window.addEventListener("load", setup);