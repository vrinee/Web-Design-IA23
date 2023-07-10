let tiles = document.querySelectorAll("div.jogo > *")
let grid  = document.querySelector("div.jogo")

let player = 'X'
let gameState = true

/*

posições do tabuleiro

[0][1][2]
[3][4][5]
[6][7][8]

*/ 






    


function checkvalidation (tile) {

    if(tile.innerText == 'X' || tile.innerText == 'O')
    return false

    return true

}

const winningConditions =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function checkwincondition () {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        const a = board[winCondition[0]];
        const b = board[winCondition[1]];
        const c = board[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

}

grid.addEventListener("click", (ev) => {

    if (gameState){
        const tileIndex = [...tiles].indexOf(ev.target)
        if(tileIndex == -1)
        return
    
        let valido =  checkvalidation (tiles[tileIndex])
        if(valido)
        {
            tiles[tileIndex].innerText = player
            player = player == 'X' ? 'O' : 'X' 
        }
        checkwincondition ()
        if(roundWon)
        gameState = false
    }
})
