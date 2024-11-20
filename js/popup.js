'use strict';

// Get the elements
const popup = document.querySelector(".popup");
const trigger = document.querySelector(".about__button-trigger");
const closeBtn = document.querySelector(".popup-close-btn");

// When the user clicks on the trigger, show the popup
trigger.addEventListener("click", function () {
  popup.style.display = "flex";
});

// When the user clicks on the close button, hide the popup
closeBtn.addEventListener("click", function () {
  popup.style.display = "none";
});

// Close the popup if the user clicks outside the popup content
window.addEventListener("click", function (event) {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});