var fbNumber = 4;
const cancelBtn = document.querySelector(".cancel-btn");
const submitBtn = document.querySelector(".submit-btn");
const scoreNumber = document.querySelectorAll(".number");
const modal = document.querySelector(".conatiner2");
modal.style.display = "none";
function CloseModal(params) {
  const close = document.querySelector(".container");
  console.log(close);
  close.style.display = "none";
}
function selectNumber(number) {
  fbNumber = number;
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
  const close = document.querySelector(".container");
  console.log(close);
  close.style.display = "none";
  const modal = document.querySelector(".conatiner2");
  modal.style.display = "block";
  const x = document.getElementById("feedback");
  x.innerHTML = "Thanks, you have selected a rating of : " + fbNumber;
}
cancelBtn.addEventListener("click", CloseModal);
