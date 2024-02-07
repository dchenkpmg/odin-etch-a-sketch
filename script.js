const grid = document.querySelector('.grid');

for (let i = 0; i < 16; i++) {
    const row = grid.appendChild(document.createElement('div'));
    for (let j = 0; j < 16; j++) {
       const cell = document.createElement('div');
       cell.classList.add('cell');
       row.appendChild(cell) ;
    }
}