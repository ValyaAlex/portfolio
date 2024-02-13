
let tabsBtn = document.querySelectorAll('.speciality__btn')
let tabsItem = document.querySelectorAll('.specialists__container')

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('speciality__btn--active') });
    e.currentTarget.classList.add('speciality__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('speciality--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('speciality--active');
  });
});

let typeBtn = document.querySelectorAll('.type__btn')
let typeItem = document.querySelectorAll('.type__container')

typeBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    typeBtn.forEach(function (btn) { btn.classList.remove('type__btn--active') });
    e.currentTarget.classList.add('type__btn--active');

    typeItem.forEach(function (element) { element.classList.remove('type--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('type--active');
  });
});

let typeBtnAutism = document.querySelectorAll('.type__btn-autism')
let typeItemAutism = document.querySelectorAll('.type__container-autism')

typeBtnAutism.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    typeBtnAutism.forEach(function (btn) { btn.classList.remove('type__btn--active') });
    e.currentTarget.classList.add('type__btn--active');

    typeItemAutism.forEach(function (element) { element.classList.remove('type--active-autism') });
    document.querySelector(`[data-target="${path}"]`).classList.add('type--active-autism');
  });
});

let psihodiagnosticBtn = document.querySelectorAll('.psihodiagnostic__btn')
let psihodiagnosticItem = document.querySelectorAll('.psihodiagnostic__container')

psihodiagnosticBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    psihodiagnosticBtn.forEach(function (btn) { btn.classList.remove('type__btn--active') });
    e.currentTarget.classList.add('type__btn--active');

    psihodiagnosticItem.forEach(function (element) { element.classList.remove('psihodiagnostic--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('psihodiagnostic--active');
  });
});
