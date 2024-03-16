const setup = () => {
    document.getElementById("button").addEventListener("click",zoeken)
    const text = "De man van An geeft geen hand aan ambetante verwanten"
    const zoeken = () => {
        let resultat = 0;
        let zoekIndex =   text.indexOf("an")
       while(zoekIndex!== -1){
               resultat++;
         zoekIndex = text.indexOf("an", zoekIndex + 1)
           }
           console.log(resultat)
       }
    document.getElementById("button1").addEventListener("click",zoeken1)
    function zoeken1 () {
        let resultat = 0;
        let zoekIndex =   text.lastIndexOf("an")
        while(zoekIndex!== -1){
            resultat++;
            zoekIndex = text.lastIndexOf("an", zoekIndex - 1)
        }
        console.log(resultat)
    }
}
window.addEventListener("load", setup);