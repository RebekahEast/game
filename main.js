//instruction popup
function instruction() {
  var ShowInstructions = document.getElementById("PopUpInstructions");
  ShowInstructions.classList.toggle("show");
}

//when pressing a key on the keyboard, something happens
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    handleArrowUpPress()
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


function handleArrowRightPress() {
  var Number2 = document.getElementsByClassName("number-2");
  Number2[0].classList.toggle("number-2");
}

function handleArrowDownPress() {
  var Number4 = document.getElementsByClassName("number-4");
  Number4[0].classList.toggle("number-4");
}

function handleArrowUpPress() {
  var rows = document.getElementsByClassName("row");
  var rowNumber = 1;
  var cellNumber = 2;
  rows[rowNumber].children[cellNumber].classList.toggle("number-2");
}

function handleArrowLeftPress() {
  var rows = document.getElementsByClassName("row");
  rows[0].children[3].classList.remove("number-2");
  rows[0].children[2].classList.add("number-2");
  rows[0].children[2].classList.remove("number-2");
  rows[0].children[1].classList.add("number-2");
  rows[0].children[1].classList.remove("number-2");
  rows[0].children[0].classList.add("number-2");
}

