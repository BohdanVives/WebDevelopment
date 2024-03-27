
    let count = 0;
    const print = () => {
        if (count<10) {
            console.log("hallo");
            count++;
        } else {
            clearInterval(taskId);
        }
    }
    let taskId = setInterval(print, 500);

window.addEventListener("load", print);

