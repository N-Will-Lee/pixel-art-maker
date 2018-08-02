document.addEventListener('DOMContentLoaded', function()    {


var gridSize = 10;
var main = document.querySelector('main');
var body = document.querySelector('body');
const colors = document.getElementById('colors');
var selectedColor = 'black';
var sColorBox = document.getElementById('selectedColor');
var canvasButton = document.getElementById('canvasButton');

createGrid(gridSize);

main.addEventListener('click',function(event){
    if ((event.target.className == "row") || (event.target.className == "main"))  {
        return;
    }
    var cell = event.target;
    console.log(cell);
    cell.style.backgroundColor = selectedColor;
})

colors.addEventListener('click', function(event)    {
    const select = event.target;
    console.log(select);
    selectedColor = select.style.backgroundColor;
    console.log(selectedColor)
    sColorBox.style.backgroundColor = selectedColor;
})

// canvasButton.addEventListener('click',function(event)   {
//     const inputNumber = document.getElementById('inputValue');
//     gridSize = parseInt(inputNumber.value);
//     console.log(gridSize);
    
//     // body.removeChild('main');    
    
//     createGrid(gridSize);
// })

function createRow() {
    const div = document.createElement('div');
    div.classList.add('row');
    return div;
}

function appendCellsTo(row, numberToCreate) {
    for (let j=0; j < numberToCreate; j++)  {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);
    }
}
function createGrid(newGridSize){
    main.removeChild;
    
    for (let i=0; i < newGridSize; i++)    {
        const row = createRow()
        appendCellsTo(row, gridSize)
        main.append(row)
    }   
}


})