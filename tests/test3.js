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
        anyOtherKeyPress();
    }
    console.log("a key was pressed!");
  });

//why does this need to be pressed twice for the first time?..
function anyOtherKeyPress() {
    let anythingElse = document.getElementById("other-button");
        if (anythingElse.style.display === "none") {
                anythingElse.style.display = "block";
            } else {
            anythingElse.style.display = "none";
        }
  }
