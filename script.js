const GRID_HEIGHT = 16;
const GRID_WIDTH = 16;

function generateGrid() {
    const gridContainer = document.querySelector(".grid-container");
    for (let i = 0; i < GRID_HEIGHT; i++) {
        const gridRow = document.createElement("section");
        gridRow.className = "grid-row";
        for (let j = 0; j < GRID_WIDTH; j++) {
            const newTile = document.createElement("div");
            newTile.className = "div-tile";
            newTile.style.backgroundColor = "lightpink";
            newTile.style.padding = "100px";
            gridRow.appendChild(newTile);
        }
        gridContainer.appendChild(gridRow);
    }
}

generateGrid();