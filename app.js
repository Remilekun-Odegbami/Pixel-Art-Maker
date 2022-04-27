const sizePicker = document.querySelector(".size-picker");
const inputHeight = document.querySelector("#inputHeight");
const inputWidth = document.querySelector("#inputWidth");
const color = document.querySelector("#colorPicker");
const pixelCanvas = document.querySelector("#pixelCanvas");

// clear grid function
function clearGrid() {
  const gridRows = document.querySelectorAll("tr");
  gridRows.forEach((row) => {
    row.remove();
  });
}

// function to create grid
function makeGrid(e) {
    e.preventDefault();

    // clear grid everytime button is clicked
    clearGrid();

    const height = inputHeight.value;
    const width = inputWidth.value;

    for (let i = 0; i <= height; i++) {
        // create table row
        const row = document.createElement("tr");
        for (let j = 1; j <= width; j++) {
            // create table column
            const column = document.createElement("td");
            column.id = "column-i-j";
            // append column to row
            row.appendChild(column);
        }
        //append row to pixelCanvas
        pixelCanvas.appendChild(row);
    }
}

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener("submit", makeGrid);

pixelCanvas.addEventListener("click", function (e) {
  e.target.style.backgroundColor = color.value;
});
