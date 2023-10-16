document.addEventListener('DOMContentLoaded', function () {
    // Get all the square elements inside the game board
    const squares = document.querySelectorAll('#board > div');

    // Initialize a state array to keep track of the game
    const gameState = new Array(9).fill(null);
    let currentPlayer = 'X'; // Initialize the current player as 'X'

    // Function to handle square click
    function handleSquareClick(index) {
        if (gameState[index] === null) {
            // Check if the square is empty
            squares[index].textContent = currentPlayer; // Display 'X' or 'O'
            squares[index].classList.add(currentPlayer); // Add the 'X' or 'O' class for styling
            gameState[index] = currentPlayer; // Update the game state
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Toggle the current player
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

    // Loop through each square and add the 'square' class
    squares.forEach((square, index) => {
        square.classList.add('square');
        // Add click event listener to handle square click
        square.addEventListener('click', () => {
            handleSquareClick(index);
            // You can add code to check for a win or a draw here
        });
        // Add mouseover event listener to handle square mouseover
        square.addEventListener('mouseover', handleSquareMouseOver);
        // Add mouseout event listener to handle square mouseout
        square.addEventListener('mouseout', handleSquareMouseOut);
    });
});
