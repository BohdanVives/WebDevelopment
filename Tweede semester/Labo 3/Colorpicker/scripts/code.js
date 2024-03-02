const setup = () => {
    const redRange = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange = document.getElementById('blueRange');
    const redValue = document.getElementById('redValue');
    const greenValue = document.getElementById('greenValue');
    const blueValue = document.getElementById('blueValue');
    const colorDemo = document.getElementById('colorDemo');

    function updateColor() {
        const red = redRange.value;
        const green = greenRange.value;
        const blue = blueRange.value;
        const colorString = `rgb(${red}, ${green}, ${blue})`;
        colorDemo.style.backgroundColor = colorString;

        redValue.textContent = red;
        greenValue.textContent = green;
        blueValue.textContent = blue;
    }

    redRange.addEventListener('input', updateColor);
    greenRange.addEventListener('input', updateColor);
    blueRange.addEventListener('input', updateColor);

    updateColor();
    }
window.addEventListener("load", setup);