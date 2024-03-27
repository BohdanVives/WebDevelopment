const setup = () => {


}
window.addEventListener("load", setup);

let taskId = setInterval(print, 500);
let count = 0;
const print = () => {
    if (count<5) {
        console.log("hallo");
        count++;
    } else {
        clearInterval(taskId);
    }
}