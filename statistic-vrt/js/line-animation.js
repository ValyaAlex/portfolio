function onEntry3(entryes) {
  entryes.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('delete-mask');
    }
  });
}
let optionsLine3 = { threshold: [0.1] };
let observerLine3 = new IntersectionObserver(onEntry3, optionsLine3);
let element3 = document.querySelectorAll('.mask-2');
for (let el of element3) {
  observerLine3.observe(el);
}
