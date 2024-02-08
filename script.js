const grid = document.querySelector('.grid');
let gridWidth = grid.offsetWidth;
let gridHeight = grid.offsetHeight;

let number  = 16;
let cellWidth = gridWidth / number;
let cellHeight = gridHeight / number;

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
            cell.style.backgroundColor = 'blue';
        }
    });
    cell.addEventListener('mouseup', () => {
        isDown = false;
    });
});

let button = document.querySelector('button');
button.addEventListener('click', () => {
    let originalNumber = number;
    let numberPrompt = prompt('Enter the number of boxes to be generated on a side of the grid (min 4, max 100)', 16);
    if (numberPrompt !== null) {
        number = parseInt(numberPrompt);
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
        
        if (numberPrompt !== null) {
            grid.innerHTML = "";
            gridWidth = grid.offsetWidth;
            gridHeight = grid.offsetHeight;
            
            cellWidth = gridWidth / number;
            cellHeight = gridHeight / number;
            
            for (let i = 0; i < number; i++) {
                let row = document.createElement('div');
                row.style.width = ``
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
                        cell.style.backgroundColor = 'blue';
                    }
                });
                cell.addEventListener('mouseup', () => {
                    isDown = false;
                });
            });
        }
    });