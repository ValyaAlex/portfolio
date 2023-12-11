const goTopBtn = document.querySelector(".go-top");
let headerBtn = document.querySelector('.header__btn');

window.addEventListener("scroll", trackScroll);
goTopBtn.addEventListener("click", goTop);

function trackScroll() {
  const scrolled = window.scrollY;
  const coords = document.documentElement.clientHeight;
  if (scrolled > coords) {
    goTopBtn.classList.add("go-top--show");
  } else {
    goTopBtn.classList.remove("go-top--show");
  }
}

function goTop() {
  if (window.scrollY > 0) {
    window.scroll(0, -window.innerHeight); 
  }
}