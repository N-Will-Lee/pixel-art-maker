document.addEventListener('DOMContentLoaded', function()    {

    var gridSize = 10;
    var main = document.querySelector('main');
    const colors = document.getElementById('colors');
    var selectedColor = 'black';
    var sColorBox = document.getElementById('selectedColor');

    createGrid(gridSize);
    
    main.addEventListener('click',function(event){
        if ((event.target.className == "row") || (event.target.className == "main"))  {
            return;
        }
        var cell = event.target;
        cell.style.backgroundColor = selectedColor;
    })
    colors.addEventListener('click', function(event)    {
        const select = event.target;
        selectedColor = select.style.backgroundColor;
        sColorBox.style.backgroundColor = selectedColor;
    })
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