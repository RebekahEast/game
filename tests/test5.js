//purposely puts a 2 in place
function Number2Generator() {
  var rows = document.getElementsByClassName("row");
  rows[0].children[3].classList.add("number-2");
  rows[1].children[2].classList.add("number-2");
  rows[2].children[2].classList.add("number-2");
  rows[3].children[3].classList.add("number-2");
  rows[3].children[1].classList.add("number-2");
}

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

//this code checks if ANY number-2s are touching the leftmost, but I need them to stack next to each other (and then combine eventually)
function handleArrowLeftPress() {
  // Get all cells with the "number-2" class
  const filledCells = document.querySelectorAll(".number-2");

  // Move each filled cell one to the left, if possible
  filledCells.forEach((cell) => {
    // Check if the cell to the left is empty
    const prevCell = cell.previousElementSibling;

    if (prevCell !== null && !prevCell.classList.contains("number-2")) {
      // Move the current cell to the left
      prevCell.classList.add("number-2");
      cell.classList.remove("number-2");
    }
  });
}

//this code checks if ANY number-2s are touching the rightmost, but I need them to stack next to each other (and then combine eventually)
//sometimes when pressing right the trailing 2 on the last row will catch up with the other 2 - why?
function handleArrowRightPress() {
  // Get all cells with the "number-2" class
  const filledCells = document.querySelectorAll(".number-2");

  // Move each filled cell one to the left, if possible
  filledCells.forEach((cell) => {
    // Check if the cell to the left is empty
    const nextCell = cell.nextElementSibling;

    if (nextCell !== null && !nextCell.classList.contains("number-2")) {
      // Move the current cell to the left
      nextCell.classList.add("number-2");
      cell.classList.remove("number-2");
    }
  });
}

/*
For Row 1 to Row 4			
  Check if row 1
    Yes: Move on
    No:
      For Cell 1 to Cell 4		
        Check if it has anything in the cell	
          Yes: 
            Check if the cell above has anything in the cell	
              Yes: 
                Move on
              No: 
                Remove value from current cell 
                Add value to cell above
          No: 
            Move on	




      | 1 | 1 | - | 1 |      
      | - | 1 | - | 1 |    
      | - | - | - | 1 |    
      | 1 | - | 1 | - |    

//Full row: [1,0,1,0]

//[1,1]


*/

function isFirstRow(rowIndex) {
  return rowIndex === 0;
}

function handleArrowUpPress() {
  moveCellValue(false);
}

function isLastRow(rowIndex) {
  return rowIndex === 3;
}

function moveCellValue(inverse) {
  const rows = Array.from(document.querySelectorAll(".row"));
  if(inverse) {
    rows.reverse();
  }
  rows.forEach((row, rowIndex) => {
    if (!isFirstRow(rowIndex)) {
      const nextRow = rows[rowIndex - 1];
      const cells = row.querySelectorAll(".cell");
      cells.forEach((cell, cellIndex) => {
        if (cell.classList.contains("number-2")) {
          const cellAbove = nextRow.children[cellIndex];
          if (!cellAbove.classList.contains("number-2")) {
            cell.classList.remove("number-2");
            cellAbove.classList.add("number-2");
          }
        }
      });
    }
  });
}

function handleArrowDownPress() {
  moveCellValue(true)
}

let whatHappens1 = "purposely places a number 2 on the 4th box - WORKS";
let whatHappens2 =
  "when left and right arrows are pressed, each number-2 will move one space to the left or right - WORKS";
let whatHappens3 =
  "when up and down arrows are pressed, each number-2 will move one space up or down - WORKS for up";

document.getElementById("what-happens-1").innerHTML = whatHappens1;
document.getElementById("what-happens-2").innerHTML = whatHappens2;
document.getElementById("what-happens-3").innerHTML = whatHappens3;
