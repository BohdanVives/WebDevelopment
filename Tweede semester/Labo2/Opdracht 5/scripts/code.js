const setup = () => {
    console.log("Hello world");
    let buttonWijz = document.getElementById("wijzig");
    buttonWijz.addEventListener("click", () => {
        let pElement = document.getElementById("txtOutput");
        pElement.innerHTML = "Welkom!";
    });
    let wijzigButtonTerug = document.getElementById("wijzig terug");
    wijzigButtonTerug.addEventListener("click", () =>{
        let paElement = document.getElementById("txtOutput");
        paElement.innerHTML = "Hello world";
    });
}
window.addEventListener("load", setup);
