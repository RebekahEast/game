//instruction popup
function instruction() {
  var ShowInstructions = document.getElementById("PopUpInstructions");
  ShowInstructions.classList.toggle("show");
}

//when pressing a key on the keyboard, something happens
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    handleArrowUpPress();
  } else if (event.key === "ArrowDown") {
    handleArrowDownPress();
  } else if (event.key === "ArrowRight") {
    handleArrowRightPress();
  } else if (event.key === "ArrowLeft") {
    handleArrowLeftPress();
  } else {
    console.log("yeh");
  }
  console.log("a key was pressed!");
});

function randomNumbersGenerator() {
  addNumberToRandomCell("number-2");
  addNumberToRandomCell("number-4");
}

function getRandomRow() {
  var rows = document.getElementsByClassName("row");
  const rowNumber = Math.floor(Math.random() * rows.length); //creates random for the rows
  const randomRow = rows[rowNumber];
  return randomRow;
}

function getEmptyCells(randomRow) {
  var cells = [...randomRow.children];
  const emptyCells = cells.filter((cell) => {
    if (
      cell.classList.contains("number-2") ||
      cell.classList.contains("number-4")
    ) {
      return false;
    } else {
      return true;
    }
  });
  return emptyCells;
}

function getRandomCell(emptyCells) {
  return Math.floor(Math.random() * emptyCells.length); //creates random for the rows
}

function addNumberToRandomCell(numberToAdd) {
  var randomRow = getRandomRow();
  var emptyCells = getEmptyCells(randomRow);
  const cellNumber = getRandomCell(emptyCells);
  if (emptyCells.length == 0) {
    addNumberToRandomCell();
  } else {
    emptyCells[cellNumber].classList.add(numberToAdd);
  }
}
