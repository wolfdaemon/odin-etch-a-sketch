const body = document.querySelector("body");
const divContainer = document.createElement("div");
const btn = document.createElement("button");
let divSquareNum = 16;
let divSquareNumSquared = divSquareNum * divSquareNum;
let divSquareNumRemover = 0;

divContainer.style.height = "16rem";
divContainer.style.width = "16.4rem";

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
	divSquareNum = parseInt(divSquareNum);

	if (divSquareNum > 100) {
		alert("Enter a lower number");
		return;
	}

	divSquareNumRemover = 0;

	while (divSquareNumRemover < divSquareNumSquared) {
		const divSquareSelector = document.body.querySelector(".square");
		divSquareSelector.remove();
		divSquareNumRemover++; 
	}

	divSquareNumSquared = divSquareNum * divSquareNum;
	
	let divSquareNumContainer = divSquareNum;

	divContainer.style.height = divSquareNumContainer + "rem";
	divContainer.style.width = divSquareNumContainer + 0.4 + "rem";

	divSquareNumSquared = divSquareNum * divSquareNum;
	defineContainerSize(divSquareNumSquared);
});
