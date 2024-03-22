const setup = () => {
    let items = document.querySelectorAll("li");
    for (let i = 0; i < items.length;i++){
        items[i].classList.add("listitem");
    }
    let foto = document.createElement("img")
    foto.setAttribute("src", "foto/photo_2024-03-22_22-45-55.jpg")
    document.body.append(foto)
}
window.addEventListener("load", setup);