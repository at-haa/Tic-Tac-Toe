let cells = document.querySelectorAll(".cell");
let status = document.querySelector(".status");
let turn = "X";
let gameActive = true;
let emptyCells = 9;
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

document.querySelector(".btn").addEventListener("click", () => {
  cells.forEach((cell) => (cell.textContent = ""));
  turn = "X";
  status.textContent = `It's ${turn}'s turn`;
  gameActive = true;
  emptyCells = 9;
});

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.textContent === "" && gameActive && emptyCells) {
      emptyCells--;
      validateGame(cell);
    }
  });
});

function validateGame(cell) {
  cell.textContent = turn;
  for (let i = 0; i < winningConditions.length; i++) {
    if (
      cells[winningConditions[i][0]].textContent !== "" &&
      cells[winningConditions[i][0]].textContent ===
        cells[winningConditions[i][1]].textContent &&
      cells[winningConditions[i][1]].textContent ===
        cells[winningConditions[i][2]].textContent
    ) {
      status.textContent = `Player ${turn} has won!`;
      gameActive = false;
      return;
    }
  }
  if (!gameActive || !emptyCells) {
    status.textContent = `Game ended in a draw!`;
    gameActive = false;
    return;
  }
  turn = turn == "X" ? "O" : "X";
  status.textContent = `It's ${turn}'s turn`;
}
