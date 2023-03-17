//purposely puts a 2 in place
function Number2Generator() {
  var rows = document.getElementsByClassName("row");
  rows[0].children[3].classList.add("number-2");
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
  const filledCells = document.querySelectorAll('.number-2');

  // Move each filled cell one to the left, if possible
  filledCells.forEach(cell => {
    // Check if the cell to the left is empty
    const prevCell = cell.previousElementSibling;
    if (!prevCell.classList.contains('number-2')) {
      // Move the current cell to the left
      prevCell.classList.add('number-2');
      cell.classList.remove('number-2');
    }
  });
}

let whatHappens1 = "purposely places a number 2 on the 4th box - WORKS";
let whatHappens2 = "";
let whatHappens3 = "";

document.getElementById("what-happens-1").innerHTML = whatHappens1;
document.getElementById("what-happens-2").innerHTML = whatHappens2;
document.getElementById("what-happens-3").innerHTML = whatHappens3;
