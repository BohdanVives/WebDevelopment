const setup = () => {
    let items = document.querySelectorAll("li");
    for (let i = 0; i < items.length;i++){
        items[i].classList.add("listitem");
    }
    let foto = document.createElement("img")
    foto.setAttribute("src", "foto/photo_2024-03-22_22-45-55.jpg")
    document.body.append(foto)


    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            let videoElement = document.getElementById('camera-preview');
            videoElement.srcObject = stream;
        })
        .catch(error => {
            console.error('Error accessing camera:', error);
        });
}
window.addEventListener("load", setup);