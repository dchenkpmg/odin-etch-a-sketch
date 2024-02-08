const grid = document.querySelector('.grid');

// let number = prompt('Enter the number of boxes to be generated on a side of the grid', 16);
// number = parseInt(number);

let button = document.querySelector('button');
button.addEventListener('click', () => {
    let number = prompt('Enter the number of boxes to be generated on a side of the grid (min 4, max 100)', 16);
    number = parseInt(number); 
    while (number > 100 || number < 4) {
        alert('Not a valid number! Please enter a number between 4 and 100!')
        number = prompt('Enter the number of boxes to be generated on a side of the grid (min 4, max 100)', 16);
        if (number === null) {
            break;
        }
    }
    grid.innerHTML = "";
    let gridWidth = grid.offsetWidth;
    let gridHeight = grid.offsetHeight;
    
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
});

// let gridWidth = grid.offsetWidth;
// let gridHeight = grid.offsetHeight;

// let cellWidth = gridWidth / number;
// let cellHeight = gridHeight / number;

// for (let i = 0; i < number * number; i++) {
//     let row = document.createElement('div');
//     // row.style.width = `${cellWidth}ox`;
//     row.style.height = `${cellHeight}px`;
//     grid.appendChild(row);
//     // const row = grid.appendChild(document.createElement('div'));
//     for (let j = 0; j < number * number; j++) {
//        const cell = document.createElement('div');
//        cell.classList.add('cell');
//        cell.style.width = `${cellWidth}px`;
//        cell.style.height = `${cellHeight}px`;
//        row.appendChild(cell);
//     }
// }