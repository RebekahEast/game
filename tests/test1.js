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
  

function handleArrowDownPress() {
    var Number2 = document.getElementsByClassName("number-2");
    Number2[0].classList.toggle("number-2");
}
  
  // adds the class 'number-2' to a random cell on the 1st column
  //BUT it doesn't take into account full classes already when randomising
  //how could you add children to randomise too?
function handleArrowUpPress() {
    var rows = document.getElementsByClassName("row");
    const random = Math.floor(Math.random() * rows.length); //creates random for the rows
    rows[random].children[3].classList.add("number-2");
}


// this moves only the top row. how could I say all?... think
function handleArrowLeftPress() {
    var rows = document.getElementsByClassName("row");
    rows[0].children[3].classList.remove("number-2");
    rows[0].children[2].classList.add("number-2");
    rows[0].children[2].classList.remove("number-2");
    rows[0].children[1].classList.add("number-2");
    rows[0].children[1].classList.remove("number-2");
    rows[0].children[0].classList.add("number-2");
}
  
function handleArrowRightPress() {
    var rows = document.getElementsByClassName("row");
    rows[0].children[0].classList.remove("number-2");
    rows[0].children[1].classList.add("number-2");
    rows[0].children[1].classList.remove("number-2");
    rows[0].children[2].classList.add("number-2");
    rows[0].children[2].classList.remove("number-2");
    rows[0].children[3].classList.add("number-2");
}