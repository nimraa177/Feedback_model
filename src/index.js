const cancelBtn = document.querySelector(".cancel-btn");
const submitBtn = document.querySelector(".submit-btn");
const scoreNumber = document.querySelectorAll(".number");

function CloseModal(params) {
  const close = document.querySelector(".container");
  console.log(close);
  close.style.display = "none";
}
function selectNumber(number) {
  // Remove the active class from all buttons
  var buttons = document.querySelectorAll(".number");
  buttons.forEach(function (button) {
    button.classList.remove("active");
  });
  console.log(buttons, "button");

  // Add the active class to the clicked button
  buttons[number - 1].classList.add("active");
}
function submitReview() {
    const modal = document.querySelector
    
}
cancelBtn.addEventListener("click", CloseModal);
