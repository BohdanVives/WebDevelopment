const setup = () => {
    let text = "plezier";
    for(let i = 0; i < text.length && i < 5; i++){
        console.log(text.substring(i,(i+3)))
    }

}
window.addEventListener("load", setup);