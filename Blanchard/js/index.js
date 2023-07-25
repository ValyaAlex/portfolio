
/*swiper-hero*/
const swiper = new Swiper(".swiper-hero", {
  direction: "horizontal",
  loop: true,
  autoplay: true,

  autoplay: {
    delay: 6000,
  },

  slideNext: {
    runCallbacks: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: false
  },


  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}'
  },
});

/*menu*/

document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
    autoHide: false,
    scrollbarMaxSize: 28,
  });
});

const btns = document.querySelectorAll(".menu__btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const closeAllDropDown = (e) => {
  if (e.target.classList.contains('menu__btn')) {
    return
  };
  dropdowns.forEach(el => {
    el.classList.remove(activeClassdropdowns);
  });
  document.body.removeEventListener('click', closeAllDropDown);
};

btns.forEach(item => {
  item.addEventListener("click", function () {
    let dropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != dropThis) {
        el.classList.remove(activeClassdropdowns);
      };
    });
    dropThis.classList.toggle(activeClassdropdowns);

    if (dropThis.classList.contains(activeClassdropdowns)) {
      document.body.addEventListener('click', closeAllDropDown);
    } else {
      document.body.removeEventListener('click', closeAllDropDown);
    };
  });
});

/*search-input*/
const searchPh = document.querySelector('.search');
const input = document.querySelector('.search__input');

searchPh.addEventListener('click', function () {
  document.getElementById("search").placeholder = ""
});

input.addEventListener('blur', function (e) {
  this.placeholder = 'Поиск по сайту'
});

/*choices-gallery*/
const element = document.querySelector('#select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  position: 'bottom',
  shouldSort: false
});

/*modal-gallery*/
const hover = document.querySelectorAll('.hover-block');
const modalOverlay = document.querySelector('.modal-overlay');
const modals = document.querySelectorAll('.modal');
const closed = document.querySelectorAll('.modal__close');

hover.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible');
  });
});

modalOverlay.addEventListener('click', (e) => {
  console.log(e.Target);

  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });
  };
});

closed.forEach(function (el) {
  el.addEventListener('click', function () {

    modalOverlay.classList.remove('modal-overlay--visible');

    modals.forEach((elem) => {
      elem.classList.remove('modal--visible');
    });
  });
})


/*swiper-gallery*/

const swiper2 = new Swiper(".swiper-gallery", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 15,

  pagination: {
    el: ".gallery__pagination-container .swiper-pagination",
    type: 'fraction',
    clickable: true,
  },

  navigation: {
    nextEl: ".gallery-next",
    prevEl: ".gallery-prev",
  },

  a11y:
    false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },

  breakpoints: {

    400: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20
    },

    700: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 35
    },

    1450: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 35
    },

    1600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  }
});


/*accordion-catalog*/
new Accordion('.accordion');
let catalog = document.querySelector('.catalog__list');
let years = catalog.querySelectorAll('.ac-trigger');
let arrow = catalog.querySelectorAll('.years__arrow-svg');

years.forEach(function (el) {
  el.addEventListener('click', function () {
    el.classList.toggle('ac-trigger--active');
  })
})

/*tabs-catalog*/
let catalogLink = document.querySelectorAll('.ac__link');
let catalogContent = document.querySelectorAll('.catalog__content');

catalogLink.forEach(function (link) {
  link.addEventListener('click', function (el) {
    const path = el.currentTarget.dataset.path;

    catalogContent.forEach(function (content) { content.classList.remove('catalog__content--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__content--active');
  });
});


/*popup*/
let popup = document.querySelectorAll('.popup__btn');
let popupActive = document.querySelectorAll('.popup__text');

popup.forEach(function (e) {
  e.addEventListener('click', function (p) {

    let path = p.currentTarget.getAttribute('data-path');
    e.classList.toggle('popup__btn--active');
    document.querySelector(`[data-target="${path}"]`).classList.toggle('popup__text--active');
  })
})

/*swiper-events*/
const swiper3 = new Swiper(".swiper-events", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 15,

  slideNext: {
    runCallbacks: false,
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },

  navigation: {
    nextEl: ".events-next",
    prevEl: ".events-prev",
  },

  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },

  breakpoints: {

    550: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20
    },

    700: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 35
    },

    960: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 25

    },

    1550: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
      pagination: false
    }
  }
});


/*swiper-partners*/
const swiper4 = new Swiper(".swiper-partners", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,

  slideNext: {
    runCallbacks: false,
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  navigation: {
    nextEl: ".partners-next",
    prevEl: ".partners-prev",
  },

  breakpoints: {

    600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 35
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50
    },

    1550: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  }
});


/*validate*/

const selector = document.querySelector("input[type='tel']");
const im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 20
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        console.log(phone)
        return Number(phone) && phone.length === 10
      }
    }
  },

  messages: {

    name: {
      required: 'Вы не ввели имя',
      minLength: 'Недопустимый формат',
      maxLength: 'Слишком длинное имя'
    },
    tel: {
      required:'Вы не ввели телефон',
      function: 'Недопустимый формат'
    }
  }
});


let search = document.querySelector('.header__search-btn');
let inputSearch = document.querySelector('.header__form');
let closedSearch = document.querySelector('.closed-search');

search.addEventListener('click', function () {

  inputSearch.classList.toggle('header__form--active');

  closedSearch.classList.toggle('closed-search--active');

  search.classList.toggle('header__search-btn--active');

});

closedSearch.addEventListener('click', function () {

  inputSearch.classList.remove('header__search-input--active');

  closedSearch.classList.remove('closed-search--active');

  search.classList.remove('header__search-btn--active');
});

