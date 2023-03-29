// Modal
const modalWrapper = document.querySelector('.newsletter__popup')
const modalBackground = document.querySelector('.newsletter__popup__back')
const modalWindow = document.querySelector('.newsletter__popup__front')
const closeButton = document.querySelector('.close')
const body = document.querySelector('body')

window.onload = e => {
  closeButton.addEventListener('click', () => {
    closeModal()
  })

  setTimeout(() => {
    showModal()
  }, 5000)
}
const showModal = function () {
  modalWrapper.classList.remove('hidden')

  if (!modalWrapper.classList.contains('hidden')) {
    body.style.overflow = 'hidden'
  }
}

const closeModal = function () {
  modalWrapper.classList.add('hidden')
  body.style.overflow = 'auto'
}
