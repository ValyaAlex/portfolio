(function () {
    /*[pan and well CSS scrolls]*/
    if (window.innerWidth >= 1025) {
        var pnls = document.querySelectorAll('.section').length - 1,
            scdir, hold = false,
            list = document.getElementById('list'),
            section6 = document.querySelectorAll('.section-6');

        function _scrollY(obj) {
            var slength, plength, pan, step = 100,
                vh = window.innerHeight / 100,
                vmin = Math.min(window.innerHeight, window.innerWidth) / 100;
            if ((this !== undefined && this.id === 'well') || (obj !== undefined && obj.id === 'well')) {
                pan = this || obj;
                plength = parseInt(pan.offsetHeight / vh);
            }
            if (pan === undefined) {
                return;
            }
            plength = plength || parseInt(pan.offsetHeight / vmin);
            slength = parseInt(pan.style.transform.replace('translateY(', ''));
            if (scdir === 'up' && Math.abs(slength) < (plength - plength / pnls)) {
                slength = slength - step;
            } else if (scdir === 'down' && slength < 0) {
                slength = slength + step;
            } else if (scdir === 'top') {
                slength = 0;
            }
            if (hold === false) {
                hold = true;
                pan.style.transform = 'translateY(' + slength + 'vh)';
                setTimeout(function () {
                    hold = false;
                }, 500);
            }
        }
        /*[swipe detection on touchscreen devices]*/
        function _swipe(obj) {
            var swdir,
                sX,
                sY,
                dX,
                dY,
                threshold = 100,
                /*[min distance traveled to be considered swipe]*/
                slack = 50,
                /*[max distance allowed at the same time in perpendicular direction]*/
                alT = 500,
                /*[max time allowed to travel that distance]*/
                elT, /*[elapsed time]*/
                stT; /*[start time]*/
            obj.addEventListener('touchstart', function (e) {
                var tchs = e.changedTouches[0];
                swdir = 'none';
                sX = tchs.pageX;
                sY = tchs.pageY;
                stT = new Date().getTime();
                //e.preventDefault();
            }, false);

            obj.addEventListener('touchmove', function (e) {
                e.preventDefault(); /*[prevent scrolling when inside DIV]*/
            }, false);

            obj.addEventListener('touchend', function (e) {
                var tchs = e.changedTouches[0];
                dX = tchs.pageX - sX;
                dY = tchs.pageY - sY;
                elT = new Date().getTime() - stT;
                if (elT <= alT) {
                    if (Math.abs(dX) >= threshold && Math.abs(dY) <= slack) {
                        swdir = (dX < 0) ? 'left' : 'right';
                    } else if (Math.abs(dY) >= threshold && Math.abs(dX) <= slack) {
                        swdir = (dY < 0) ? 'up' : 'down';
                    }
                    if (obj.id === 'well') {
                        if (swdir === 'up') {
                            scdir = swdir;
                            _scrollY(obj);
                        } else if (swdir === 'down' && obj.style.transform !== 'translateY(0)') {
                            scdir = swdir;
                            _scrollY(obj);

                        }
                        e.stopPropagation();
                    }
                }
            }, false);
        }
        /*[assignments]*/
        var well = document.getElementById('well');
        well.style.transform = 'translateY(0)';
        well.addEventListener('wheel', function (e) {
            if (e.deltaY < 0) {
                scdir = 'down';
            }
            if (e.deltaY > 0) {
                scdir = 'up';
            }
            e.stopPropagation();
        });
        well.addEventListener('wheel', _scrollY);
        _swipe(well);

        function onEntry(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    list.addEventListener("wheel", (evt) => {
                        evt.preventDefault();
                        if (evt.deltaY < 0) {
                            list.scrollBy({
                                left: -innerWidth / 1.5,
                                behavior: 'smooth'
                            });
                        }
                        if (evt.deltaY > 0) {
                            list.scrollBy({
                                left: innerWidth / 1.5,
                                behavior: 'smooth'
                            });
                        }
                        if (list.scrollLeft >= 250) {
                            hold = true
                        } else if (list.scrollLeft === 0) {
                            hold = false;
                        }
                    })
                }
            });
        }

        let observer2 = new IntersectionObserver(onEntry, { threshold: 0.3 });
        for (let elem of section6) {
            observer2.observe(elem);
        }
    } else {
        document.body.style.overflowY = 'visible'
    }
})();


