new Accordion('.accordion');
let q = document.querySelector('.programs__list')
let qLink = q.querySelectorAll('.ac-trigger')
/*let plusA = q.querySelectorAll('.question__btn-svg')*/

qLink.forEach(function (el) {
  el.addEventListener('click', function () {
    el.classList.toggle('ac-trigger--active');
  })
})

new Accordion('.accordion-2');