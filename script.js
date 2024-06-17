const player01 = "X";
const player02 = "O";
let currentPlayer = player01;
let board = ["", "", "", "", "", "", "", "", "", ""]
let gameOn = true;
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], //colunas
    [0, 4, 8], [2, 4, 6] //diagonais
];

function changePlayer(){
    if(currentPlayer === player01){
        currentPlayer = player02;
    } else {
        currentPlayer = player01;
    }

    // currentPlayer =
    //  currentPlayer === player01 ? player02 : player01
}

function handleClick(index){
    if(gameOn === false) return;
    
    if(board[index] !== "") return;

    board[index] = currentPlayer;

    const cell = document.getElementsByClassName('cell')[index];

    cell.innerHTML = currentPlayer;

    checkWinner();

    changePlayer();
}

function checkWinner() {
    const msg = document.getElementById("mesage");
    for (let combo of winningCombinations) {
        const [a, b, c] = combo;

        if ((board[a] !== "") &&
            (board[a] === board[b]) &&
            (board[b] === board[c])){
                gameOn = false;
                                          
                msg.innerText = "O jogador " + currentPlayer + " ganhou!!"

                return;
        }
    }

    if (!board.includes("")){
        gameOn = false;

        msg.innerText = "Deu velha!!";
    }

}