
const setup = () => {
    const begin = () => {
        let paragraf = document.createElement("p")
        let text = document.createTextNode("dat is nieuwe p element")
        paragraf.append(text)

        let div = document.getElementById("myDIV")
        div.append(paragraf)
    }
    let button = document.getElementById("button");
    button.addEventListener("click", begin);
}
window.addEventListener("load", setup);
