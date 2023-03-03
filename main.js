//instruction popup
function instruction() {
  var ShowInstructions = document.getElementById("PopUpInstructions");
  ShowInstructions.classList.toggle("show");
}

//when pressing a key on the keyboard, an alert pops up
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    console.log("ehy");
  } else if (event.key === "ArrowDown") {
    handleArrowDownPress();
  } else if (event.key === "ArrowRight") {
    handleArrowRightPress();
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
  var Number2 = document.getElementsByClassName("number-2");
  Number2[0].classList.toggle("number-2");
}
