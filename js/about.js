'use strict'
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.5,  // Animation starts when 50% of the element is visible
    rootMargin: '0px'  // No additional margins
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate')
        observer.unobserve(entry.target) // Stop observing after animation starts
      }
    })
  }, observerOptions)

  // Find all elements that need animation
  const animatedElements = document.querySelectorAll(
    '.about__text-title, .about__text-subtitle, .about__text-highlight, .about__button-trigger'
  )

  // Start observing each element individually
  animatedElements.forEach(element => {
    observer.observe(element)
  })

  // Popup functionality
  const popup = document.querySelector(".popup")
  const trigger = document.querySelector(".about__button-trigger")
  const closeBtn = document.querySelector(".popup-close-btn")

  trigger.addEventListener("click", function () {
    popup.style.display = "flex"
  })

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none"
  })

  window.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none"
    }
  })
})