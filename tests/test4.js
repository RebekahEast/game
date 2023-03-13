document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") { //when the arrow up is pressed I want 2s to appear
      handleArrowUpPress()
    } else if (event.key === "ArrowDown") { //when down is pressed I want 2s to disappear
      handleArrowDownPress();
    } else if (event.key === "ArrowRight") { //when right is pressed I want to move all 2s to the right
      handleArrowRightPress();
    } else if (event.key === "ArrowLeft") { //when left is pressed I want to move all 2s to the left
      handleArrowLeftPress();
    } else {
      console.log("yeh");
    }
    console.log("a key was pressed!");
  });



let whatHappens1 = "when the down arrow is pressed, a random 2 will appear (trying to use an array filter this time)";
let whatHappens2 = "";
let whatHappens3 = "";

document.getElementById("what-happens-1").innerHTML = whatHappens1;
document.getElementById("what-happens-2").innerHTML = whatHappens2;
document.getElementById("what-happens-3").innerHTML = whatHappens3;

console.log("hye");