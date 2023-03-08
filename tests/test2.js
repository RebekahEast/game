document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") { 
      handleArrowUpPress()

    } else if (event.key === "ArrowDown") { 
      handleArrowDownPress();

    } else if (event.key === "ArrowRight") { 
      handleArrowRightPress();

    } else if (event.key === "ArrowLeft") { 
        delayedHandleArrowLeftPress();
    } else {
      console.log("yeh");
    }
    console.log("a key was pressed!");
  });

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

function delayedHandleArrowLeftPress() {
    var rows = document.getElementsByClassName("row");
    setTimeout(function() {
        rows[0].children[3].classList.remove("number-2");
    }, 25); 
  
    setTimeout(function() {
        rows[0].children[2].classList.add("number-2");
    }, 50); 
  
    setTimeout(function() {
        rows[0].children[2].classList.remove("number-2");
    }, 75); 

    setTimeout(function() {
        rows[0].children[1].classList.add("number-2");
    }, 100); 
  
    setTimeout(function() {
        rows[0].children[1].classList.remove("number-2");
    }, 125); 
  
    setTimeout(function() {
        rows[0].children[0].classList.add("number-2");
    }, 150); 
  }