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


let whatHappens1 = "for this test, I've removed the rows div and instead had just the cells in a flex";
let whatHappens2 = "when the page loads/refreshes, a random 2 and random 4 will appear";
let whatHappens3 = "pressing any random key thats not an arrow will give a warning pop up";
    
document.getElementById("what-happens-1").innerHTML = whatHappens1;
document.getElementById("what-happens-2").innerHTML = whatHappens2;
document.getElementById("what-happens-3").innerHTML = whatHappens3;