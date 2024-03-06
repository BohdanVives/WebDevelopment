const setup = () => {
    const redRange = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange = document.getElementById('blueRange');
    const redValue = document.getElementById('redValue');
    const greenValue = document.getElementById('greenValue');
    const blueValue = document.getElementById('blueValue');
    const colorDemo = document.getElementById('colorDemo');
    const orangeRange = document.getElementById("orangeRage");
    const orangeValue = document.getElementById("orangeValue");
    function updateColor() {
        const red = redRange.value;
        const green = greenRange.value;
        const blue = blueRange.value;
        const orange = orangeRange.value;
        colorDemo.style.backgroundColor = `rgb(${red}, ${green}, ${blue}, ${orange})`;

        redValue.textContent = red;
        greenValue.textContent = green;
        blueValue.textContent = blue;
        orangeValue.textContent = orange;
    }

    redRange.addEventListener('input', updateColor);
    greenRange.addEventListener('input', updateColor);
    blueRange.addEventListener('input', updateColor);
    orangeRange.addEventListener("input", updateColor)

    updateColor();
}
window.addEventListener("load", setup);