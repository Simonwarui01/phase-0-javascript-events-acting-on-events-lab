// Your code here
function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const leftPosition = parseInt(dodger.style.left.replace('px', ''), 10);
    if (leftPosition > 0) {
      dodger.style.left = `${leftPosition - 1}px`;
    }
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const leftPosition = parseInt(dodger.style.left.replace('px', ''), 10);
    if (leftPosition < 360) {
      dodger.style.left = `${leftPosition + 1}px`;
    }
  }