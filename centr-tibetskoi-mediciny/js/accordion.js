new Accordion('.accordion');
let q = document.querySelector('.questions__list')
let qLink = q.querySelectorAll('.ac-trigger')

qLink.forEach(function (el) {
  el.addEventListener('click', function () {
    el.classList.toggle('ac-trigger--active');
  })
})