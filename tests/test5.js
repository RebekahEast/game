//purposely puts a 2 in place
function Number2Generator() {
  var rows = document.getElementsByClassName("row");
  rows[0].children[3].classList.add("number-2");
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    handleArrowUpPress();
  } else if (event.key === "ArrowDown") {
    handleArrowDownPress();
  } else if (event.key === "ArrowRight") {
    delayedHandleArrowRightPress();
  } else if (event.key === "ArrowLeft") {
    delayedHandleArrowLeftPress();
  } else {
    console.log("yeh");
  }
  console.log("a key was pressed!");
});

let whatHappens1 = "purposely places a number 2 on the 4th box - WORKS";
let whatHappens2 = "";
let whatHappens3 = "";

document.getElementById("what-happens-1").innerHTML = whatHappens1;
document.getElementById("what-happens-2").innerHTML = whatHappens2;
document.getElementById("what-happens-3").innerHTML = whatHappens3;
