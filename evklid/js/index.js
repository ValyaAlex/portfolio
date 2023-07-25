let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav');
let menuLinks = menu.querySelectorAll('.nav__link')
let close = document.querySelector('.close')
let search = document.querySelector('.nav__btn')
let input = document.querySelector('.nav__input')
let closedSearch = document.querySelector('.closed-search')

burger.addEventListener('click', function () {

  burger.classList.toggle('burger--active');

  menu.classList.toggle('nav--active');

  document.body.classList.toggle('stop-scroll');
})

close.addEventListener('click', function () {

  burger.classList.remove('burger--active');

  menu.classList.remove('nav--active');

  document.body.classList.remove('stop-scroll');
})

menuLinks.forEach(function (el) {

  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('nav--active');

    document.body.classList.remove('stop-scroll');
  })
})

search.addEventListener('click', function () {

  input.classList.toggle('nav__input--active');

  closedSearch.classList.toggle('closed-search--active');

  search.classList.toggle('nav__btn--ative');
})

closedSearch.addEventListener('click', function () {

  input.classList.remove('nav__input--active');

  closedSearch.classList.remove('closed-search--active');

  search.classList.remove('nav__btn--ative');
})

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },


  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  a11y: {
    
    paginationBulletMessage: 'Перейти к слайду {{index}}'
    },
});

let tabsBtn = document.querySelectorAll('.stages__item__btn')
let tabsItem = document.querySelectorAll('.stages__content')

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('stages__item__btn--active') });
    e.currentTarget.classList.add('stages__item__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('stages__content--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('stages__content--active');
  });
});

new Accordion('.accordion');
let q = document.querySelector('.questions__list')
let qLink = q.querySelectorAll('.questions__link')
let plusA = q.querySelectorAll('.question__btn-svg')

qLink.forEach(function (el) {
  el.addEventListener('click', function () {
    el.classList.toggle('questions__link--active');
  })
})
