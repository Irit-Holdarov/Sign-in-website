'use strict'

document.addEventListener('DOMContentLoaded', function () {
  // Function to include HTML files
  function includeHTML() {
    return new Promise((resolve) => {
      const elements = document.querySelectorAll('[data-include]')
      let completedRequests = 0

      if (elements.length === 0) {
        resolve()
        return
      }

      elements.forEach(function (element) {
        const file = element.getAttribute('data-include')

        fetch(file)
          .then(response => response.text())
          .then(data => {
            element.innerHTML = data
            if (file === 'header.html') {
              updateNavigation()
            }
            completedRequests++;
            if (completedRequests === elements.length) {
              resolve()
            }
          })
          .catch(error => {
            console.error('Error loading file:', error)
            completedRequests++;
            if (completedRequests === elements.length) {
              resolve()
            }
          })
      })
    })
  }

  function updateNavigation() {
    const navList = document.getElementById('navList')
    const isHomePage = window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')
    const isServicePage = window.location.pathname.includes('service')

    if (navList) {
      const menuItems = isHomePage
        ? [
          { href: '#about', text: 'אודות' },
          { href: '#services', text: 'השירותים שלנו' },
          { href: '#tranding', text: 'גלריה' },
          { href: '#contact', text: 'צור קשר' }
        ]
        : [
          { href: 'index.html', text: 'דף הבית' },
          { href: 'index.html#about', text: 'אודות' },
          { href: 'index.html#services', text: 'השירותים שלנו' },
          { href: 'index.html#tranding', text: 'גלריה' },
          { href: 'index.html#contact', text: 'צור קשר' }
        ]

      navList.innerHTML = menuItems
        .map(item => `
          <li class="btn nav__item">
            <a href="${item.href}" ${isServicePage ? 'onclick="handleServicePageLinks(event, this)"' : ''}>${item.text}</a>
          </li>
        `).join('')

      // Add smooth scrolling for homepage
      if (isHomePage) {
        navList.addEventListener('click', function (event) {
          const link = event.target.closest('a')
          if (link && link.getAttribute('href').startsWith('#')) {
            event.preventDefault()
            const targetId = link.getAttribute('href').substring(1)
            scrollToElement(targetId)
          }
        })
      }
    }
  }

  // Helper function for smooth scrolling
  function scrollToElement(targetId) {
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const offset = 80
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Function to handle navigation from service pages
  window.handleServicePageLinks = function (event, link) {
    const href = link.getAttribute('href')
    if (href.includes('#')) {
      event.preventDefault()
      const targetId = href.split('#')[1]
      localStorage.setItem('scrollToId', targetId)
      window.location.href = 'index.html'
    }
  }

  // Check for stored scroll target on page load
  if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
    const scrollToId = localStorage.getItem('scrollToId')
    if (scrollToId) {
      localStorage.removeItem('scrollToId')
      setTimeout(() => {
        scrollToElement(scrollToId)
      }, 100)
    }
  }

  // Mobile menu initialization function
  function initializeMobileMenu() {
    const hamburgerBtn = document.querySelector('.hamburger-menu')
    const headerNavigate = document.querySelector('.header__navigate')

    if (hamburgerBtn && headerNavigate) {
      // Handle hamburger button click
      hamburgerBtn.addEventListener('click', function () {
        this.classList.toggle('active')
        headerNavigate.classList.toggle('active')
      })

      // Close menu when clicking a link
      const navLinks = headerNavigate.querySelectorAll('a')
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          hamburgerBtn.classList.remove('active')
          headerNavigate.classList.remove('active')
        })
      })

      // Close menu when clicking outside
      document.addEventListener('click', function (event) {
        const isClickInside = headerNavigate.contains(event.target) ||
          hamburgerBtn.contains(event.target)

        if (!isClickInside && headerNavigate.classList.contains('active')) {
          hamburgerBtn.classList.remove('active')
          headerNavigate.classList.remove('active')
        }
      })
    }
  }

  // Initialize all functions in correct order
  includeHTML().then(() => {
    initializeMobileMenu()
  })
})