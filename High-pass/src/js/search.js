const searchInput = document.querySelector('.header__input');
const loupe = document.querySelector('.loupe');
const closeSearch = document.querySelector('.closed-search')

loupe.addEventListener('click', () => {
    searchInput.classList.remove('hidden');
    loupe.classList.add('hidden');
    closeSearch.classList.remove('hidden')
})

closeSearch.addEventListener('click', () => {
    searchInput.classList.add('hidden');
    loupe.classList.remove('hidden');
    closeSearch.classList.add('hidden')
})