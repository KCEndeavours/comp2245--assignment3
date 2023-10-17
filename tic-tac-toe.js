document.addEventListener('DOMContentLoaded', function () {
    // Get all the square elements inside the game board
    const squares = document.querySelectorAll('#board > div');

    // Initialize a state array to keep track of the game
    const gameState = new Array(9).fill(null);
    let currentPlayer = 'X'; // Initialize the current player as 'X'
    let gameWon = false;

    // Function to handle square click
    function handleSquareClick(index) {
        if (!gameWon && gameState[index] === null) {
            // Check if the square is empty and the game hasn't been won
            squares[index].textContent = currentPlayer; // Display 'X' or 'O'
            squares[index].classList.add(currentPlayer); // Add the 'X' or 'O' class for styling
            gameState[index] = currentPlayer; // Update the game state
            checkWin(); // Check for a win
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Toggle the current player
        }
    }

    // Function to check for a win
    function checkWin() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];

        for (const combo of winningCombinations) {
            const [a, b, c] = combo;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                gameWon = true;
                document.getElementById('status').textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                document.getElementById('status').classList.add('you-won');
            }
        }
    }

    // Function to handle square mouseover
    function handleSquareMouseOver() {
        this.classList.add('hover'); // Add the 'hover' class for styling when the mouse is over the square
    }

    // Function to handle square mouseout
    function handleSquareMouseOut() {
        this.classList.remove('hover'); // Remove the 'hover' class for styling when the mouse leaves the square
    }

    // Function to reset the game
    function resetGame() {
        squares.forEach((square, index) => {
            square.textContent = ''; // Clear the content of the squares
            square.classList.remove('X', 'O'); // Remove the 'X' and 'O' classes
        });
        gameState.fill(null); // Reset the game state
        gameWon = false;
        document.getElementById('status').textContent = 'Move your mouse over a square and click to play an X or an O.'; // Reset the status message
        document.getElementById('status').classList.remove('you-won'); // Remove the 'you-won' class
        currentPlayer = 'X'; // Reset the current player to 'X'
    }

    // Add click event listener to the New Game button to reset the game
    document.querySelector('.btn').addEventListener('click', resetGame);

    // Loop through each square and add the 'square' class
    squares.forEach((square, index) => {
        square.classList.add('square');
        // Add click event listener to handle square click
        square.addEventListener('click', () => {
            handleSquareClick(index);
        });
        // Add mouseover event listener to handle square mouseover
        square.addEventListener('mouseover', handleSquareMouseOver);
        // Add mouseout event listener to handle square mouseout
        square.addEventListener('mouseout', handleSquareMouseOut);
    });
});
