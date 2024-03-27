const setup = () => {
    let count = 0;
    const print = () => {
        if (count<5) {
            console.log("hallo");
            count++;
        } else {
            clearInterval(taskId);
        }
    }
    let taskId = setInterval(print, 500);
}
window.addEventListener("load", setup);

