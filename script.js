const container = document.querySelector("#container");
const createCanvasBtn = document.querySelector("#create-canvas");

container.style.height = "960px";
container.style.width = "960px";
container.style.display = "grid";

createCanvasBtn.addEventListener("click", () => {
    resetCanvas();
    let cellNum = prompt("Enter a number of squares per side", "");
    while (isNaN(cellNum) === true || cellNum > 100 || cellNum < 1) {
        alert("Please enter a valid number between 1 and 100")
        cellNum = prompt("Enter a number of squares per side", "");
    }
    createGrid(cellNum);
});

function createGrid(cellNum) {
    for (let i = 0; i < cellNum * cellNum; i++) {
        const div = document.createElement("div");
        div.addEventListener("mouseover", function() {
            div.style.backgroundColor = `black`
        });
        container.appendChild(div);
    }
    container.style.gridTemplateColumns = `repeat(${cellNum}, 1fr)`
    container.style.gridTemplateRows = `repeat(${cellNum}, 1fr)`
}

function resetCanvas() {
    container.innerHTML = '';
}











