'use strict'

document.addEventListener('DOMContentLoaded', function () {
  const video = document.querySelector('.main-video video')
  if (video) {
    // Initial attempt to play
    const playPromise = video.play()

    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Autoplay prevented:", error)

        // Try to play on first screen touch
        document.body.addEventListener('touchstart', function () {
          video.play();
        }, { once: true });
      })
    }

    // Handle video pause event
    video.addEventListener('pause', function () {
      video.play()
    })

    // Ensure video keeps playing
    setInterval(() => {
      if (video.paused) {
        video.play()
      }
    }, 1000)
  }
})