const body = document.querySelector("body");
const divContainer = document.createElement("div");
const btn = document.createElement("button");
let divSquareNum = 16;
let divSquareNumSquared = 256;
let divSquareNumRemover = 0;

body.appendChild(btn);
body.appendChild(divContainer);

divContainer.className = "container";

btn.textContent = "Size";

function defineContainerSize(divSquareNumSquared) {
	for (let i = 0; i < divSquareNumSquared; i++) {
		const fragmentDivSquare = document.createDocumentFragment();
		const divSquare = document.createElement("div");
		divSquare.className = "square";
		fragmentDivSquare.appendChild(divSquare);
		divContainer.appendChild(fragmentDivSquare);
	}
}

defineContainerSize(divSquareNumSquared);

divContainer.addEventListener("mouseover", (event) => {
	event.target.style.backgroundColor = "#000";
});

btn.addEventListener("click", () => {
	divSquareNum = prompt("What number of squares for the side-length of the grid?");
	while (divSquareNumRemover < 256) {
		// TODO: find a way to access divSquare to mass delete without breaking the defineContainerSize function
		divSquare.remove();
		divSquareNumRemover++; 
	}
	divSquareNumSquared = divSquareNum * divSquareNum;
	defineContainerSize(divSquareNumSquared);

});
