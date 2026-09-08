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
            newTile.style.opacity = 1;
            gridRow.appendChild(newTile);
        }
        gridContainer.appendChild(gridRow);
    }

    gridContainer.addEventListener("mouseover", lightUpTile);
}

function lightUpTile(e){
    if (e.target.classList.contains("grid-tile")){
        let rValue = Math.floor(Math.random() * 255);
        let gValue = Math.floor(Math.random() * 255);
        let bValue = Math.floor(Math.random() * 255);
        e.target.style.backgroundColor = `rgb(${rValue}, ${gValue}, ${bValue})`;
        e.target.style.opacity -= 0.1;
        if (e.target.style.opacity < 0){
            e.target.style.opacity = 0;
        }
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

