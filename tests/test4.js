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

  //this keeps crashing the page
  function handleArrowDownPress() {
    var rows = document.getElementsByClassName("row");
    const randomRowIndex = Math.floor(Math.random() * rows.length); // select a random row index
    const randomRow = rows[randomRowIndex]; //selects a random row element from the rows array using the randomRowIndex variable, and stores it in a variable called randomRow.
    const childCount = randomRow.children.length;
    let randomChildIndex = Math.floor(Math.random() * childCount); // select a random child index
    let randomChild = randomRow.children[randomChildIndex];
    // loop until a child element that does not have the class "number-2" is found
    while (randomChild.classList.contains("number-2")) {
      randomChildIndex = Math.floor(Math.random() * childCount);
      randomChild = randomRow.children[randomChildIndex];
    }
    randomChild.classList.add("number-2");
}

let whatHappens1 = "when the down arrow is pressed, a random 2 will appear (trying to use an array filter this time)";
let whatHappens2 = "";
let whatHappens3 = "";

document.getElementById("what-happens-1").innerHTML = whatHappens1;
document.getElementById("what-happens-2").innerHTML = whatHappens2;
document.getElementById("what-happens-3").innerHTML = whatHappens3;