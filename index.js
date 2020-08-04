const dodger = document.getElementById("dodger");

document.addEventListener("keydown", function(key) {
  switch (key.key) {
  case "ArrowLeft":
    moveDodgerLeft();
    break;
  case "ArrowRight":
    moveDodgerRight();
    break;
  }
});

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
 
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}
