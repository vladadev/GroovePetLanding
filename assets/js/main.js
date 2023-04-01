// Smooth Scroll
let navlinks = document.querySelectorAll('.smooth-scroll')

for (const link of navlinks) {
  link.addEventListener('click', smoothScroll)
}

function smoothScroll(event) {
  event.preventDefault()

  const href = this.getAttribute('href')

  document.querySelector(href).scrollIntoView({
    behavior: 'smooth',
  })
}

// Copyright year
const footerCopyright = document.querySelector('.footer__copyright')
const year = new Date().getFullYear()
footerCopyright.innerHTML = `© ${year} GROOVEPET. ALL RIGHTS RESERVED.`
