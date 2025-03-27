const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  let left = parseInt(dodger.style.left.replace("px", ""), 10);
  if (left > 0) {
    dodger.style.left = `${left - 10}px`; // Moves left by 10px
  }
}

function moveDodgerRight() {
  let left = parseInt(dodger.style.left.replace("px", ""), 10);
  if (left < 360) { // Assuming game area is 400px wide and dodger is 40px wide
    dodger.style.left = `${left + 10}px`; // Moves right by 10px
  }
}