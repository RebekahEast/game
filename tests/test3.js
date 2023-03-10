function randomNumber2Generator() {
    var cells = document.getElementsByClassName("cell");
    const random = Math.floor(Math.random() * cells.length); //creates random for the rows
    const random2 = Math.floor(Math.random() * cells.length); //creates random for the rows
    cells[random].classList.add("number-2");
    cells[random2].classList.add("number-4");
}

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") { 
      handleArrowUpPress()

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

