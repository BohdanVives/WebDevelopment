const setup = () => {
    document.getElementById("button").addEventListener("click", textSplitsen)
    function textSplitsen(){
        let text = document.getElementById("iets").value

        let gesplitsteText = text.split("");

        let spaceText = gesplitsteText.join(" ")
        console.log(spaceText)
    }

    document.getElementById("button3").addEventListener("click",SplitsenAdereMethode);
    function SplitsenAdereMethode () {
        let resultat = "";
        let iets = document.getElementById("iets").value

        for (let i = 0; i < iets.length; i++){
            resultat += iets.charAt(i) + " ";
        }
        console.log(resultat)
    }

    document.getElementById("button2").addEventListener("click", textSamen)
    function textSamen() {
        let eerste = document.getElementById("firstword").value;
        let tweede = document.getElementById("secondword").value;
        let resultat = eerste + " " + tweede;
        console.log(resultat)
    }

}
window.addEventListener("load", setup);