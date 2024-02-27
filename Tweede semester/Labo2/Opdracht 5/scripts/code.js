const setup = () => {
    console.log("Hello world");
    let buttonWijz = document.getElementById("wijzig");
    buttonWijz.addEventListener("click", () => {
        let pElement = document.getElementById("txtOutput");
        pElement.innerHTML = "Welkom!";
    });
}
window.addEventListener("load", setup);
