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
    console.log("yhe");
  } else if (event.key === "ArrowRight") {
    handleArrowKeyPress();
  } else {
    console.log("yeh");
  }
  console.log("al done!");
});

  