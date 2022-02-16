let elHeader = document.querySelector('.header')

window.addEventListener('scroll', function () {
  if (this.scrollY > 20) {
    elHeader.classList.add('sticky')
  } else {
    elHeader.classList.remove('sticky')
  }
})