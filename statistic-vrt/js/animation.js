document.addEventListener('DOMContentLoaded', () => {

    let elements = document.querySelectorAll('.section');

    const titleS2 = document.querySelector('.title');
    const textS2 = document.querySelector('.section-2__text');
    const infoS2 = document.querySelector('.section-2__info');
    const titleS3 = document.querySelector('.section-3__title');
    const textS3 = document.querySelector('.section-3__text');
    const infoS3 = document.querySelector('.section-3__info');
    const rightS3 = document.querySelector('.section-3__right');
    const img1S3 = document.querySelector('.section-3__img-1');
    const img2S3 = document.querySelector('.section-3__img-2');
    const titleS4 = document.querySelector('.section-4__title');
    const textS4 = document.querySelector('.section-4__text');
    const bgS4 = document.querySelector('.section-4__bg');
    const titleS5 = document.querySelector('.section-5__title');
    const textS5 = document.querySelector('.section-5__text');
    const chartS5 = document.querySelector('.container__chart');
    const listS5 = document.querySelector('.section-5__list');
    const titleS6 = document.querySelector('.section-6__title');
    const leftS6 = document.querySelector('.section-6__left');
    const rightS6 = document.querySelector('.section-6__right');
    const item1S6 = document.querySelector('.item-1');
    const item2S6 = document.querySelector('.item-2');
    const item3S6 = document.querySelector('.item-3');
    const item4S6 = document.querySelector('.item-4');
    const item5S6 = document.querySelector('.item-5');
    const item6S6 = document.querySelector('.item-6');
    const titleS7 = document.querySelector('.title-2');
    const leftS7 = document.querySelector('.section-6__left-2');
    const rightS7 = document.querySelector('.section-6__right-2');
    const item7S7 = document.querySelector('.item-7');
    const item8S7 = document.querySelector('.item-8');
    const item9S7 = document.querySelector('.item-9');
    const item10S7 = document.querySelector('.item-10');
    const item11S7 = document.querySelector('.item-11');
    const item12S7 = document.querySelector('.item-12');
    const titleS8 = document.querySelector('.title-3');
    const leftS8 = document.querySelector('.section-6__left-3');
    const rightS8 = document.querySelector('.section-6__right-3');
    const item13S8 = document.querySelector('.item-13');
    const item14S8 = document.querySelector('.item-14');
    const item15S8 = document.querySelector('.item-15');
    const item16S8 = document.querySelector('.item-16');
    const item17S8 = document.querySelector('.item-17');
    const item18S8 = document.querySelector('.item-18');


    const tl = gsap.timeline({ paused: true });
    const tlS3 = gsap.timeline({ paused: true });
    const tlS4 = gsap.timeline({ paused: true });
    const tlS5 = gsap.timeline({ paused: true });
    const tlS6 = gsap.timeline({ paused: true });
    const tlS7 = gsap.timeline({ paused: true });
    const tlS8 = gsap.timeline({ paused: true });

    tl.from(titleS2, { duration: 1, opacity: 0, y: 200 })
        .from(textS2, { duration: 1, opacity: 0, y: 200 }, "-=0.6")
        .from(infoS2, { duration: 1, opacity: 0, y: 200 }, "-=0.6");

    tlS3.from(titleS3, { duration: 1, opacity: 0, y: 200 })
        .from(textS3, { duration: 1, opacity: 0, y: 200 }, "-=0.6")
        .from(infoS3, { duration: 1, opacity: 0, y: 200 }, "-=0.8")
        .from(rightS3, { duration: 1, opacity: 0, x: 200 })
        .from(img1S3, { duration: 1, opacity: 0, x: -200 })
        .from(img2S3, { duration: 1, opacity: 0, x: 200 }, "-=1");

    tlS4.from(titleS4, { duration: 1, opacity: 0, y: 200 })
        .from(textS4, { duration: 1, opacity: 0, y: 200 })
        .from(bgS4, { duration: 1, opacity: 0, y: 200 });

    tlS5.from(titleS5, { duration: 1, opacity: 0, y: 200 })
        .from(textS5, { duration: 1, opacity: 0, y: 200 }, "-=0.6")
        .from(chartS5, { duration: 2, opacity: 0, y: 200 })
        .from(listS5, { duration: 1, opacity: 0 });

    tlS6.from(titleS6, { duration: 1, opacity: 0, y: 200 })
        .from(leftS6, { duration: 1, opacity: 0, y: 200 })
        .from(rightS6, { duration: 1, opacity: 0, y: 200 }, '-=0.6')
        .from(item1S6, { duration: 1, opacity: 0, y: 200 }, '-=0.6')
        .from(item2S6, { duration: 1, opacity: 0, y: 200 }, '-=0.6')
        .from(item3S6, { duration: 1, opacity: 0, y: 200 }, '-=0.6')
        .from(item4S6, { duration: 1, opacity: 0, y: 200 }, '-=0.6')
        .from(item5S6, { duration: 1, opacity: 0, y: 200 }, '-=0.6')
        .from(item6S6, { duration: 1, opacity: 0, y: 200 }, '-=0.6');

    tlS7.from(titleS7, { duration: 1, opacity: 0, y: 200 })
        .from(leftS7, { duration: 1, opacity: 0, y: 200 })
        .from(rightS7, { duration: 1, opacity: 0, y: 200 }, '-=0.6')
        .from(item7S7, { duration: 1, opacity: 0, y: 200 }, '-=0.6')
        .from(item8S7, { duration: 1, opacity: 0, y: 200 }, '-=0.6')
        .from(item9S7, { duration: 1, opacity: 0, y: 200 }, '-=0.6')
        .from(item10S7, { duration: 1, opacity: 0, y: 200 }, '-=0.6')
        .from(item11S7, { duration: 1, opacity: 0, y: 200 }, '-=0.6')
        .from(item12S7, { duration: 1, opacity: 0, y: 200 }, '-=0.6');

    tlS8.from(titleS8, { duration: 1, opacity: 0, y: 200 })
        .from(leftS8, { duration: 1, opacity: 0, y: 200 })
        .from(rightS8, { duration: 1, opacity: 0, y: 200 }, '-=0.6')
        .from(item13S8, { duration: 1, opacity: 0, y: 200 }, '-=0.6')
        .from(item14S8, { duration: 1, opacity: 0, y: 200 }, '-=0.6')
        .from(item15S8, { duration: 1, opacity: 0, y: 200 }, '-=0.6')
        .from(item16S8, { duration: 1, opacity: 0, y: 200 }, '-=0.6')
        .from(item17S8, { duration: 1, opacity: 0, y: 200 }, '-=0.6')
        .from(item18S8, { duration: 1, opacity: 0, y: 200 }, '-=0.6');


    let orangeLine = document.querySelectorAll('.orange__line');

    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                tl.play();
                orangeLine.forEach((e) => {
                    e.classList.add('show')
                })
            }
            if (change.isIntersecting) {
                if (change.target.classList.contains('section-3')) {
                    tlS3.play();
                    orangeLine.forEach((e) => {
                        e.classList.add('show-2')
                    })
                }
            }
            if (change.isIntersecting) {
                if (change.target.classList.contains('section-4')) {
                    tlS4.play();
                    orangeLine.forEach((e) => {
                        e.classList.add('show-3')
                    })
                }
            }
            if (change.isIntersecting) {
                if (change.target.classList.contains('section-5')) {
                    tlS5.play();
                    orangeLine.forEach((e) => {
                        e.classList.add('show-4')
                    })
                }
            }
            if (change.isIntersecting) {
                if (change.target.classList.contains('section-6')) {
                    tlS6.play()
                }
            }
            if (change.isIntersecting) {
                if (change.target.classList.contains('section-7')) {
                    tlS7.play()
                }
            }
            if (change.isIntersecting) {
                if (change.target.classList.contains('section-8')) {
                    tlS8.play()
                }
            }
        });

    }

    let observer = new IntersectionObserver(onEntry, { threshold: 0.3 });
    for (let elm of elements) {
        observer.observe(elm);
    }
})


