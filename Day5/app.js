
window.addEventListener('DOMContentLoaded', () => {
const tiles = Array.from(document.querySelectorAll(".tile"));
const playerdisplay = document.querySelector("display_player");
const reset = document.querySelector("#reset");
const winner = document.querySelector(".display_winner");

// Start of method one

let board = ['', '', '', '', '', '', '', '', ''];
let currentplayer = 'X';
let isgameactive = true;

const Player_X_Won = "Player X Won!"
const Player_O_Won = "Player O Won!"
const tie = "Tie!"

// ==========
// Line out:
// [0,1,2,
//  3,4,5,
//  6,7,8]
// ==========

const winning_conditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function handleResultValidation(){
    let roundwon=false;
    for( let i=0 ; i <= 7 ; i++ ){
        const wincondition = winning_conditions[i];
        const a = board[wincondition[0]];
        const b = board[wincondition[1]];
        const c = board[wincondition[2]];

        if (a === ''|| b === '' || c === ''){
            continue;
        }

        if (a === b && b === c){
            roundwon = true;
            break;
        }
    }

    if(roundwon){
        announce(currentplayer === 'X'?Player_X_Won:Player_O_Won);
        isgameactive=false;
        return;
    }

    if(!board.includes('')){
        announce(tie);
    }
}

const announce = (type) =>{
    switch(type){
    case Player_O_Won:
        winner.innerHTML = 'player <span class="playerO">O</span> Won'
        break;

    case Player_X_Won:
        winner.innerHTML = 'player <span class="playerX">X</span> Won'
        break;

    case tie:
        winner.innerHTML = 'Tie'
    }

    winner.classList.remove("hide")
};


const isValidAction = (tile) =>{
    if(tile.innerText === 'X' || tile.innerText === 'O'){
        return false;
    }
    return true;

};

const updateboard =  (index) => {
    board[index] = currentplayer;
}

//tile.innerText = currentPlayer;
//tile.classList.add(`player${currentPlayer}`);
const changePlayer = () => {
    playerdisplay.classList.remove(`player${currentplayer}`);
    currentplayer = currentplayer === 'X' ? 'O' : 'X';
    playerdisplay.innerText = currentplayer;
    playerdisplay.classList.add(`player${currentplayer}`);
}



const userAction = (tile,index) => {
    if(isValidAction(tile) && isgameactive){
        tile.innerText = currentplayer;
        tile.classList.add(`player${currentplayer}`);
        updateboard(index);
        handleResultValidation();
        changePlayer();
    }
}


const resetBoard = () =>{
    board = ['', '', '', '', '', '', '', '', ''];
    isgameactive = true;
    winner.classList.add("hide");

    if(currentplayer === 'O'){
        changePlayer();
    }

    tiles.forEach(tile => {
        tile.innerText = '';
        tile.classList.remove('playerX');
        tile.classList.remove('playerO');
    })
}

    tiles.forEach( (tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    });

reset.addEventListener("click",resetBoard);
}
//add event listener to each tile in the "tiles" array.


// End of method one
)
