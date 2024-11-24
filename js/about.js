'use strict'
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // When the section is visible
      if (entry.isIntersecting) {
        //Find all the elements that need animation
        const title = entry.target.querySelector('.about__text-title')
        const subtitle = entry.target.querySelector('.about__text-subtitle')
        const highlight = entry.target.querySelector('.about__text-highlight')
        const button = entry.target.querySelector('.about__button-trigger')

        // Add the animation class to each element
        title.classList.add('animate')
        subtitle.classList.add('animate')
        highlight.classList.add('animate')
        button.classList.add('animate')

        // Stop listening to changes after the animation has been triggered
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.2  // The animation will start when 20% of the section is visible
  })

  // Start listening to the changes in the section
  const aboutSection = document.querySelector('.about')
  if (aboutSection) {
    observer.observe(aboutSection)
  }
})


//Code to the popup
// Get the elements
const popup = document.querySelector(".popup")
const trigger = document.querySelector(".about__button-trigger")
const closeBtn = document.querySelector(".popup-close-btn")

// When the user clicks on the trigger, show the popup
trigger.addEventListener("click", function () {
  popup.style.display = "flex"
})

// When the user clicks on the close button, hide the popup
closeBtn.addEventListener("click", function () {
  popup.style.display = "none"
})

// Close the popup if the user clicks outside the popup content
window.addEventListener("click", function (event) {
  if (event.target === popup) {
    popup.style.display = "none"
  }
})


