const initialize = () => {
	let sliders = document.getElementsByClassName("slider");
	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	let button = document.getElementById("button");
	button.addEventListener("click", voegSwatchToe);
};

const update = () => {
	let red = document.getElementById("sldRed").value;
	let green = document.getElementById("sldGreen").value;
	let blue = document.getElementById("sldBlue").value;
	document.getElementById("lblRed").innerHTML = red;
	document.getElementById("lblGreen").innerHTML = green;
	document.getElementById("lblBlue").innerHTML = blue;
	let swatch = document.getElementById("swatch");
	swatch.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
};

const voegSwatchToe = () => {
	let red = document.getElementById("sldRed").value;
	let green = document.getElementById("sldGreen").value;
	let blue = document.getElementById("sldBlue").value;
	let swatch = document.getElementById("swatch");

	let nieiweSwatch = document.createElement("div");
	nieiweSwatch.classList.add("swatch");
	nieiweSwatch.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

	let verwijderen = document.createElement("button");
	verwijderen.textContent = "x";
	let newColor = document.getElementById("newcolor")
	const weg = () => {
		nieiweSwatch.remove()
	};

	verwijderen.addEventListener("click", weg);


	nieiweSwatch.append(verwijderen)
	newColor.append(nieiweSwatch);
};

window.addEventListener("load", initialize);
