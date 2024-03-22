const setup = () => {

    let paragraf = document.createElement("p")
    let text = document.createTextNode("dat is nieuwe p element")
    paragraf.append(text)

    let div = document.getElementById("myDIV")
    document.getElementById("button").document.addEventListener("click", begin)
    const begin = () => {
        div.append(paragraf)
    }
}
window.addEventListener("load", setup);