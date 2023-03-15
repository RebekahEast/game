document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    //when the arrow up is pressed I want 2s to appear
    handleArrowUpPress();
  } else if (event.key === "ArrowDown") {
    //when down is pressed I want 2s to disappear
    handleArrowDownPress();
  } else if (event.key === "ArrowRight") {
    //when right is pressed I want to move all 2s to the right
    handleArrowRightPress();
  } else if (event.key === "ArrowLeft") {
    //when left is pressed I want to move all 2s to the left
    handleArrowLeftPress();
  } else {
    console.log("yeh");
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
      return false;
    } else {
      return true;
    }
  });

// > < >= <= === !==

  // const emptyCells2 = cells.filter((cell) => !cell.classList.contains("number-2"))
  const cellNumber = Math.floor(Math.random() * emptyCells.length); //creates random for the rows
  if (emptyCells.length == 0) {
    handleArrowDownPress ();
  } else {
    emptyCells[cellNumber].classList.add("number-2");
  }
}

let whatHappens1 =
  "when the down arrow is pressed, a random 2 will appear ( using an array filter this time)";
let whatHappens2 = "";
let whatHappens3 = "";

document.getElementById("what-happens-1").innerHTML = whatHappens1;
document.getElementById("what-happens-2").innerHTML = whatHappens2;
document.getElementById("what-happens-3").innerHTML = whatHappens3;
