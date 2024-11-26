'use strict'

document.addEventListener('DOMContentLoaded', function () {
  function includeHTML() {
    const elements = document.querySelectorAll('[data-include]')

    elements.forEach(function (element) {
      const file = element.getAttribute('data-include')

      fetch(file)
        .then(response => response.text())
        .then(data => {
          element.innerHTML = data
          if (file === 'header.html') {
            updateNavigation();
          }
        })
        .catch(error => {
          console.error('Error loading file:', error)
        })
    })
  }


  function updateNavigation() {
    const navList = document.getElementById('navList')
    const isHomePage = window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')

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
            <a href="${item.href}">${item.text}</a>
          </li>
        `).join('')
    }
  }

  includeHTML();
})