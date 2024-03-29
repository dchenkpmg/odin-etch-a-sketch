// instantiate variables
const grid = document.querySelector('.grid');
let gridWidth = grid.offsetWidth;
let gridHeight = grid.offsetHeight;

let number  = 16;
let cellWidth = gridWidth / number;
let cellHeight = gridHeight / number;

// create the initial grid
for (let i = 0; i < number; i++) {
    let row = document.createElement('div');
    grid.appendChild(row);
    for (let j = 0; j < number; j++) {
       const cell = document.createElement('div');
       cell.classList.add('cell');
       cell.style.width = `${cellWidth}px`;
       cell.style.height = `${cellHeight}px`;
       row.appendChild(cell);
    }
}

// implement drawing with mouse listeners
let isDown = false;
const gridCells = document.querySelectorAll('.cell');
    
gridCells.forEach(cell => {
    cell.addEventListener('mousedown', (e) => {
        isDown = true;
        e.preventDefault(); // so we can still draw when we start from a drawn cell
    });
    cell.addEventListener('mouseover', () => {
        if (isDown) { 
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            cell.style.backgroundColor = '#' + randomColor;
        }
    });
    cell.addEventListener('mouseup', () => {
        isDown = false;
    });
});

// create button logic
let button = document.querySelector('button');

button.addEventListener('click', () => {
    let originalNumber = number;

    let numberPrompt = prompt('Enter the number of boxes to be generated on a side of the grid (min 4, max 100)', 16);
    if (numberPrompt !== null) {
        number = parseInt(numberPrompt);
        // check if number entered is in valid range, otherwise keep prompting or cancel
        while (number > 100 || number < 4) {
                alert('Not a valid number! Please enter a number between 4 and 100!')
                numberPrompt = prompt('Enter the number of boxes to be generated on a side of the grid (min 4, max 100)', 16);
                if (numberPrompt === null) {
                    number = originalNumber;
                    break;
                }
                number = parseInt(numberPrompt);
            }
        }
        
        // if number is valid redraw grid, if cancelled then continue with number set in previous prompt
        if (numberPrompt !== null) {
            grid.innerHTML = "";
            gridWidth = grid.offsetWidth;
            gridHeight = grid.offsetHeight;
            
            cellWidth = gridWidth / number;
            cellHeight = gridHeight / number;
            
            for (let i = 0; i < number; i++) {
                let row = document.createElement('div');
                grid.appendChild(row);
                for (let j = 0; j < number; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.style.width = `${cellWidth}px`;
                cell.style.height = `${cellHeight}px`;
                row.appendChild(cell);
                }
            }
            
            const gridCells = document.querySelectorAll('.cell');
            gridCells.forEach(cell => {
                cell.addEventListener('mousedown', (e) => {
                    isDown = true;
                    e.preventDefault();
                });
                cell.addEventListener('mouseover', () => {
                    if (isDown) { 
                        let randomColor = Math.floor(Math.random()*16777215).toString(16);
                        cell.style.backgroundColor = '#' + randomColor;
                    }
                });
                cell.addEventListener('mouseup', () => {
                    isDown = false;
                });
            });
        }
    });