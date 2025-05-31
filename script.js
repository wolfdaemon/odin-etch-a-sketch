const body = document.querySelector("body");
const divContainer = document.createElement("div");
const btn = document.createElement("button");

let divSquareNum = 16; // 16
let divSquareNumSquared = divSquareNum * divSquareNum;


body.appendChild(btn);
body.appendChild(divContainer);

divContainer.className = "container";

btn.textContent = "Size";

function defineContainerSize(divSquareNum, divSquareNumSquared) {
		
	for (let i = 0; i < divSquareNum; i++) {
		const divSquareRow = document.createElement("div");
		divSquareRow.className = "square-row";

		for (let j = 0; j < divSquareNum; j++) {
			const divSquare = document.createElement("div");
			divSquare.className = "square";
			divSquareRow.appendChild(divSquare);

			divSquare.addEventListener("mouseover", (event) => {
				event.target.style.backgroundColor = "#222";
			});

		}

		divContainer.appendChild(divSquareRow);
	}

}

defineContainerSize(divSquareNum, divSquareNumSquared);

btn.addEventListener("click", () => {
	divSquareNum = prompt("What number of squares for the side-length of the grid?");
	divSquareNum = parseInt(divSquareNum);

	if (divSquareNum > 100) {
		alert("Enter a lower number");
		return;
	}

	document.querySelectorAll(".square").forEach(e => e.remove());
	document.querySelectorAll(".square-row").forEach(e => e.remove());

	divSquareNumSquared = divSquareNum * divSquareNum;
	defineContainerSize(divSquareNum, divSquareNumSquared);
});
