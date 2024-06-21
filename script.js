// Select all game buttons and reset button
let boxes = document.querySelectorAll(".game-button");
let resetButton = document.querySelector("#reset");

// Track whose turn it is (true for player O, false for player X)
let turnO = true;

// Winning patterns in tic-tac-toe
const winPatterns = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // rows
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // columns
	[0, 4, 8],
	[2, 4, 6], // diagonals
];

// Function to check if a player has won
function checkWin() {
	for (let pattern of winPatterns) {
		const [a, b, c] = pattern;
		if (
			boxes[a].innerText &&
			boxes[a].innerText === boxes[b].innerText &&
			boxes[a].innerText === boxes[c].innerText
		) {
			return {
				winner: boxes[a].innerText,
				positions: [a, b, c],
			};
		}
	}
	return null; // No winner found
}

// Function to reset the game
function resetGame() {
	boxes.forEach((box) => (box.innerText = "")); // Clear all button texts
	turnO = true; // Reset turn to player O
}

// Add click event listener to each game button
boxes.forEach((box) => {
	box.addEventListener("click", () => {
		if (box.innerText === "") {
			// Check if the box is empty
			box.innerText = turnO ? "O" : "X"; // Set 'O' or 'X' based on turn
			turnO = !turnO; // Toggle turns

			const winResult = checkWin();
			if (winResult) {
				setTimeout(() => alert(`${winResult.winner} wins!`), 10);
				resetGame();
			}
		}
	});
});

// Add click event listener to reset button
resetButton.addEventListener("click", resetGame);
