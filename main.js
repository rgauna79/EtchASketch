//global variables
const grid = document.getElementById('grid');
const valueRange = document.getElementById('grid-value-size'); 
const gridSize = document.querySelector('#grid-size');
const btnUpdateGrid =  document.querySelector('#update-grid');
const btnEraseColor = document.querySelector('#eraser');
const colorPicked = document.getElementById('color');
const btnClear = document.querySelector('#clear-grid');

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


//function change the color when draw in grid
function changeColor(e){
    
    if (e.type === 'mouseover' &&  !mouseDown) {
        return;
    } else {
        return colorPicked.value;
    }
}


//function to draw the grid
function drawGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 1; i <= size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-square');
        //gridElement.innerHTML = `<p>.</p>`;
        gridElement.addEventListener('mouseover', (e) => {
            gridElement.style.backgroundColor = changeColor(e);
        });
        gridElement.addEventListener('mousedown', (e) => {
            gridElement.style.backgroundColor = changeColor(e);;
        });
        //console.log(gridElement);
        grid.appendChild(gridElement);
        
    }
}

function resetGrid(){
    grid.innerHTML = ``;
}

//load document
document.addEventListener('DOMContentLoaded', () => {
    valueRange.textContent =`${gridSize.value} x ${gridSize.value}`;
    //console.log(e.target.value)
    drawGrid(gridSize.value);
})

//Change the value of Grid size
gridSize.addEventListener('input', (e) => {
    valueRange.textContent = `${e.target.value} x ${e.target.value}`;
    //console.log(e.target.value)
});

//Listener to change settings on grid
btnUpdateGrid.addEventListener('click', (e) => {
    grid.innerHTML = ``;
    drawGrid(gridSize.value);
})

//Listener to erase content
btnEraseColor.addEventListener('click', () => {
    colorPicked.value = "#FFFFFF";
})

//Listener to clear grid
btnClear.addEventListener('click', () => {
    resetGrid();
    drawGrid(gridSize.value);
})