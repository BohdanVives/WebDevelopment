const setup = () => {
    const maakMetSpaties = (inputText) => {
        let result = "";
// hier wordt result opgevuld op basis van de parameter inputText
        for (let i = 0; i < inputText.length; i++) {
            result += inputText.charAt(i) + " ";
        }
        return result.trim();
    }
    document.getElementById("button").addEventListener("click",Text)
    function Text() {
        const inputText = document.getElementById("inputText").value
        let text = maakMetSpaties(inputText)
        console.log(text)
    }
}
window.addEventListener("load", setup);