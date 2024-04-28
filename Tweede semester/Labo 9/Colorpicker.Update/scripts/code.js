const initialize = () => {
	let sliders = document.getElementsByClassName("slider");
	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	let button = document.getElementById("button");
	button.addEventListener("click", voegSwatchToe);
	update()
	RefreshingDeSlider()
	if (localStorage.getItem("newSwatch")) {
		RefreshDeSwatch();
	}
	if(localStorage.getItem("sliders")){
		RefreshingDeSlider();
	}



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
		newColor.removeChild(nieiweSwatch)
	};

	verwijderen.addEventListener("click", weg);


	nieiweSwatch.append(verwijderen)
	newColor.append(nieiweSwatch);
	BewaarDeSlider()
	let swatches = JSON.parse(localStorage.getItem("newSwatch") || "[]");
	if (swatches.length > 0) {
		// Voeg de nieuwe swatch toe aan de lijst
		swatches.push("rgb(" + red + "," + green + "," + blue + ")");
		localStorage.setItem("newSwatch", JSON.stringify(swatches));

	} else {
		// Als er nog geen swatches zijn opgeslagen, sla deze op als de eerste
		localStorage.setItem("newSwatch", JSON.stringify(["rgb(" + red + "," + green + "," + blue + ")"]));
	}

};

const BewaarDeSlider = () =>{
		let sliders = document.getElementsByClassName("slider");
		let lijst = {};


		for (let slider of sliders) {
			lijst[slider.id] = slider.value;
		}

		localStorage.setItem("sliders", JSON.stringify(lijst));
		console.log(lijst)
	}
const RefreshingDeSlider = () => {
	let bewaar = localStorage.getItem("sliders");

	if (bewaar) {
		bewaar = JSON.parse(bewaar);

		for (let sliderId in bewaar) {
			document.getElementById(sliderId).value = bewaar[sliderId];
		}
	}
}

const bewaarDeSwatch = () =>{
let swatches = document.getElementsByClassName("swatch")
	let lijst = []

	for (let swatch of swatches){
		lijst.push(swatch.style.backgroundColor)
	}
	localStorage.setItem("newSwatch",JSON.stringify(lijst))
}

const RefreshDeSwatch = () => {
	let swatch = localStorage.getItem("newSwatch");

	if (swatch) {
		swatch = JSON.parse(swatch);

		let newColor = document.getElementById("newcolor");
		newColor.innerHTML = "";

		for (let swatchColor of swatch) {
			let nieiweSwatch = document.createElement("div");
			nieiweSwatch.classList.add("swatch");
			nieiweSwatch.style.backgroundColor = swatchColor;

			let verwijderen = document.createElement("button");
			verwijderen.textContent = "x";
			const weg = () => {
				newColor.removeChild(nieiweSwatch);
				bewaarDeSwatch();
			};
			verwijderen.addEventListener("click", weg);

			nieiweSwatch.appendChild(verwijderen);
			newColor.appendChild(nieiweSwatch);
		}
	}
};
window.addEventListener("load", initialize);
