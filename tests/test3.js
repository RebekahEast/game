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

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
  } else if (event.key === "ArrowDown") {
    handleArrowDownPress();
  } else if (event.key === "ArrowRight") {
  } else if (event.key === "ArrowLeft") {
  } else {
    anyOtherKeyPress();
  }
  console.log("a key was pressed!");
});

function anyOtherKeyPress() {
  let anythingElse = document.getElementById("other-button");
  if (anythingElse.style.display === "") {
    anythingElse.style.display = "block";
  } else {
    anythingElse.style.display = "";
  }
}

let whatHappens1 =
  "for this test, I've removed the rows div and instead had just the cells in a flex";
let whatHappens2 =
  "when the page loads/refreshes, a random 2 and random 4 will appear";
let whatHappens3 =
  "pressing any random key thats not an arrow will give a warning pop up";

document.getElementById("what-happens-1").innerHTML = whatHappens1;
document.getElementById("what-happens-2").innerHTML = whatHappens2;
document.getElementById("what-happens-3").innerHTML = whatHappens3;
