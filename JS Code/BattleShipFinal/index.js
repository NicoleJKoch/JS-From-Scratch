const game = [  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
                ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
                ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
                ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
                ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
                ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
                ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
                ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
                ['.', '.', '.', '.', '.', '.', '.', '.', '.'],    
];

//create a <div> element
const board = document.createElement('div')
//add the <div> element to the body of the HTML file.
document.body.appendChild(board);

//create a button
const button = document.createElement('button');
//add the button to the body in the HTML file
document.body.appendChild(button);
//create text for the button
const t = document.createTextNode('Fire!');
//add the text to the button
button.appendChild(t);

function drawBoard() {
    let boardContents = '';
    let i;
    let j;
    for (i=0; i<9; i++) {
        for (j=0; j<9; j++) {
            //append array contents for each board square
            boardContents = boardContents + game[i][j] + ' ';
        }
        //append a line break at the end of each horzontal line
        boardContents = boardContents + '<br>';
    }
    //return string repersenting board in HTML
    return boardContents;
}
//add the board to the HTML file
board.innerHTML = drawBoard();

let x = parseInt(prompt('Where would you like to place the ship? Enter an X coordinate: (0-8)'));
let y = parseInt(prompt('Where would you like to place the ship? Enter a Y coordinate: (0-8)'));

let direction = prompt('Place horizontally or vertically? (h, v)');

if (direction[0] == 'h') {
    let c;
    for (c =x; c < (x + 4); c++) {
        game[y][c] = '#';
    }
}

if (direction[0] == 'v') {
    let c;
    for (c = y; c < (y + 4); c++) {
        game[c][x] = '#';
    }
}

//redraw board after ship is placed.
board.innerHTML = drawBoard();

//calls the fire function when button is clicked.
button.addEventListener('click', () => {
    let fireX = parseInt(prompt('Where would you like to fire? Enter X cordinate: (0-8)'));
    let fireY = parseInt(prompt('Where would you like to fire? Enter Y cordinate: (0-8)'));
    
    //check if the coordinate is occupied by the ship
    if (game[fireY][fireX] == '.') {
        alert('You missed!');
    } else if (game[fireY][fireX] == '*') {
        alert('You already hit the ship there.');
    } else {
        alert('BOOM! You hit the ship!');
        game[fireY][fireX] = '*';
        //redraw the board with the new hit marker.
        board.innerHTML = drawBoard();
    }
    //check for remaining ships
    let shipFound;
    let i;
    let j;
    
    for (i=0; i<9; i++) {
        for (j=0; j<9; j++){
            if (game[i][j] != '.' && game[i][j] != '*') {
                shipFound = true;
            }
        }
    }
    
    //if no ships are found, end the game
    if (!shipFound) {
        alert('All sips have been sunk! Well done Captain! Game Over.');
        //remove the fire button
        document.body.removeChild(button);
    }
});