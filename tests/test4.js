document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    //when the arrow up is pressed I want 2s to appear
    handleArrowUpPress();
  } else if (event.key === "ArrowDown") {
    //when down is pressed I want 2s to disappear
    handleArrowDownPress();
    checkAllCellsFilled();
  } else {
    console.log("yeh");
  }
  console.log("a key was pressed!");
  const filledCells = document.querySelectorAll(".number-2");
  var cells = document.getElementsByClassName("cell");
  console.log(filledCells.length + " filledcells.length");
  console.log(cells.length + " cells.length");
});

function handleArrowDownPress() {
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
    handleArrowDownPress();
  } else {
    emptyCells[cellNumber].classList.add("number-2");
  }
}

function checkAllCellsFilled() {
  var cells = document.getElementsByClassName("cell");
  const filledCells = document.getElementsByClassName("number-2");
  if (cells.length === filledCells.length) {
    lostGame();
  } else {
  }
}

function lostGame() {
  let anythingElse = document.getElementById("end-game");
  if (anythingElse.style.display === "") {
    anythingElse.style.display = "block";
  } else {
    anythingElse.style.display = "";
  }
}

let whatHappens1 = "when the down arrow is pressed, a random 2 will appear";
let whatHappens2 = "if all the cells are full, an alert will pop up saying game over";
let whatHappens3 = "";

document.getElementById("what-happens-1").innerHTML = whatHappens1;
document.getElementById("what-happens-2").innerHTML = whatHappens2;
document.getElementById("what-happens-3").innerHTML = whatHappens3;
