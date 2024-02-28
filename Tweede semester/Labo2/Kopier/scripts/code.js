const setup = () => {
    const kopieer = () => {
        let txtInput = document.getElementById("txtInput");
        let tekst = txtInput.value;
        console.log(tekst);
    }
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;
    let txtOutput = document.getElementById("txtOutput");
    txtOutput.textContent = tekst;


}
window.addEventListener("load", setup);