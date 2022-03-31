let elBtn = document.querySelector('.nav__btn');
let elNav = document.querySelector('.nav__list');

elBtn.addEventListener('click', function () {
  elNav.classList.toggle('show');
})
