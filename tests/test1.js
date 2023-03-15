document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    handleArrowUpPress();
  } else if (event.key === "ArrowDown") {
    handleArrowDownPress();
  } else {
  }
  console.log("a key was pressed!");
});

function handleArrowDownPress() {
  var rows = document.getElementsByClassName("row");
  const rowNumber = Math.floor(Math.random() * rows.length); //creates random for the rows
  const randomRow = rows[rowNumber];
  var cells = [...randomRow.children];
  const emptyCells = cells.filter((cell) => {
    if (cell.classList.contains("number-2")) {
      return true;
    } else {
      return false;
    }
  });
  const cellNumber = Math.floor(Math.random() * emptyCells.length); //creates random for the rows
  if (emptyCells.length === 0) { //an extra = is an extra check
    handleArrowDownPress();
  } else {
    emptyCells[cellNumber].classList.remove("number-2");
  }
}

function handleArrowUpPress() {
  var rows = document.getElementsByClassName("row");
  const rowNumber = Math.floor(Math.random() * rows.length); //creates random for the rows
  const randomRow = rows[rowNumber];
  var cells = [...randomRow.children];
  const emptyCells = cells.filter((cell) => {
    if (cell.classList.contains("number-2")) {
      return false;
    } else {
      return true;
    }
  });
  const cellNumber = Math.floor(Math.random() * emptyCells.length); //creates random for the rows
  if (emptyCells.length == 0) {
    handleArrowUpPress();
  } else {
    emptyCells[cellNumber].classList.add("number-2");
  }
}

let whatHappens1 = "when the arrow up is pressed I want 2s to appear (randomly) - WORKS";
let whatHappens2 = "when down is pressed I want 2s to disappear (randomly) - WORKS";

document.getElementById("what-happens-1").innerHTML = whatHappens1;
document.getElementById("what-happens-2").innerHTML = whatHappens2;
