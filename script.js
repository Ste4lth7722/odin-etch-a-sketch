function generateGrid(gridWidth, gridHeight) {
    const gridContainer = document.querySelector(".grid-container");
    const gridRows = document.querySelectorAll(".grid-row")

    if (gridRows.length >= 1) {
        const gridRows = document.querySelectorAll(".grid-row");
        gridRows.forEach((row) => row.remove());
    }

    for (let i = 0; i < gridHeight; i++) {
        const gridRow = document.createElement("section");
        gridRow.className = "grid-row";
        for (let j = 0; j < gridWidth; j++) {
            const newTile = document.createElement("div");
            newTile.className = "grid-tile";
            gridRow.appendChild(newTile);
        }
        gridContainer.appendChild(gridRow);
    }

    gridContainer.addEventListener("mouseover", lightUpTile);
}

function lightUpTile(e){
    if (e.target.classList.contains("grid-tile")){
        e.target.classList.add("hovered");
    }
}

function resizeGrid() {
    let newWidth = prompt("Enter new width and height");
    while (newWidth < 1 || newWidth > 100) {
        newWidth = prompt("Enter new width and height");
    }
    let newHeight = newWidth;

    generateGrid(newWidth, newHeight);
}

generateGrid(16, 16);

const resizeButton = document.querySelector(".resize-button");
resizeButton.addEventListener("click", resizeGrid)

