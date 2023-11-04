// loads the html document so the DOM and its elements can be accessed.
document.addEventListener("DOMContentLoaded", function(){
    // assigns the div element with the class name board to board
    const board = document.getElementById("board");
    // assigns the children elements of the board div to boardSquares
    const boardSquares = board.children;
    // declares a constant to access the status div where the message is displayed
    const statusDiv = document.getElementById("status");
    // declares a constant to access the list of buttons with the class btn
    const newGameBtn = document.getElementsByClassName("btn");
    

    // adds the square class to all children in the board div
    for (var i = 0; i < board.childElementCount; i++){
        boardSquares[i].className = "square";
    };

    // declares an empty array to save the gamestate, a boolean value for gameWon and the default player is set to "X"
    var arr = Array(9).fill(null);
    var gameWon = false;
    var currentPlayer = "X";


    // for loop that iterates through the children in the board div
    for (let i = 0; i < board.childElementCount; i++){
        // each element within the board div will have an event listener attached when they are clicked
        boardSquares[i].addEventListener("click", function() {
            // if it is X's turn the square will display X
            if (!gameWon && currentPlayer == "X"){
                // if the square is not occupied (does not have occupied in its class list)
                if (!this.classList.contains("occupied")){
                    this.innerHTML = currentPlayer;
                    arr[i] = currentPlayer;
                    this.classList.add("X");
                    this.classList.add("occupied");
                    // sets the win conditions and changes the game state (gameWon=true)
                    if ((arr[0] == "X" && arr[1] == "X" && arr[2] == "X") || (arr[3] == "X" && arr[4] == "X" && arr[5] == "X") || 
                        (arr[6] == "X" && arr[7] == "X" && arr[8] == "X") || (arr[0] == "X" && arr[3] == "X" && arr[6] == "X") || 
                        (arr[1] == "X" && arr[4] == "X" && arr[7] == "X") || (arr[2] == "X" && arr[5] == "X" && arr[8] == "X") || 
                        (arr[0] == "X" && arr[4] == "X" && arr[8] == "X") || (arr[2] == "X" && arr[4] == "X" && arr[6] == "X") ) {
                        gameWon = true;
                        // creates a constant called statuDiv and changes the text to display which player has won the game
                        statusDiv.innerHTML = `"Congratulations! ${currentPlayer} is the Winner!`;
                        statusDiv.classList.add('you-won');
                    } 
                    currentPlayer = "O";
                }
            }
            // if it is O's turn the square will display O 
            else if (!gameWon && currentPlayer == "O") {
                // if the square is not occupied (does not have occupied in its class list)
                if (!this.classList.contains("occupied")){
                    this.innerHTML = currentPlayer;
                    arr[i] = currentPlayer;
                    this.classList.add("O");
                    this.classList.add("occupied");
                    // sets the win conditions and changes the game state (gameWon=true)
                    if ((arr[0] == "O" && arr[1] == "O" && arr[2] == "O") || (arr[3] == "O" && arr[4] == "O" && arr[5] == "O") || 
                        (arr[6] == "O" && arr[7] == "O" && arr[8] == "O") || (arr[0] == "O" && arr[3] == "O" && arr[6] == "O") || 
                        (arr[1] == "O" && arr[4] == "O" && arr[7] == "O") || (arr[2] == "O" && arr[5] == "O" && arr[8] == "O") || 
                        (arr[0] == "O" && arr[4] == "O" && arr[8] == "O") || (arr[2] == "O" && arr[4] == "O" && arr[6] == "O") ) {
                        gameWon = true;
                        // creates a constant called statusDiv and changes the text to display which player has won the game
                        statusDiv.innerHTML = `"Congratulations! ${currentPlayer} is the Winner!`;
                        statusDiv.classList.add('you-won');
                    }
                    currentPlayer = "X";
                }
            }
        })
        // Whenever the mouse is hovered over a square it will add the hover class
        boardSquares[i].addEventListener("mouseover", function(){
            this.classList.add("hover");
        })
        // then remove the class when the mouse leaves
        boardSquares[i].addEventListener("mouseout", function(){
            this.classList.remove("hover");
        })
    }
    
    // whenever the new game button is clicked
    newGameBtn[0].addEventListener('click', function(){
        // resets the game state (resets array, sets gameWon to false, sets default player to X)
        arr = Array(9).fill(null);
        gameWon = false;
        currentPlayer = "X";
        // remove the X and O classes and the respective text from the squares
        for (let i = 0; i < board.childElementCount; i++){
            boardSquares[i].classList.remove("X");
            boardSquares[i].classList.remove("O");
            boardSquares[i].classList.remove("occupied");
            boardSquares[i].innerHTML = "";
        }
        // removes the you-won style from the status div and changes the message within back to the original
        statusDiv.classList.remove("you-won");
        statusDiv.innerHTML = "Move your mouse over a square and click to play an X or an O.";
    })
});
