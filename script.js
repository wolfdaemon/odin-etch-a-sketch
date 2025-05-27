const body = document.querySelector("body");
const divContainer = document.createElement("div");
divContainer.className = "container";

body.appendChild(divContainer);

for (let i = 0; i < 256; i++) {
	const fragmentDivSquare = document.createDocumentFragment();
	const divSquare = document.createElement("div");
	divSquare.className = "square";
	fragmentDivSquare.appendChild(divSquare);
	divContainer.appendChild(fragmentDivSquare);
}

divContainer.addEventListener("mouseover", (event) => {
	event.target.style.backgroundColor = "#000";
});
