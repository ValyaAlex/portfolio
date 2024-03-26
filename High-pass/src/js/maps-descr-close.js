const closeDescr = document.querySelector('.contacts__btn-close');
const descrBlock = document.querySelector('.contacts__descr');
const mapMark = document.querySelector('.map');

closeDescr.addEventListener('click', () => {
    descrBlock.classList.add('hidden-block');
})

mapMark.addEventListener('click', () => {
    descrBlock.classList.remove('hidden-block');
})