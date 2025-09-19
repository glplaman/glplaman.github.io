function backToTop(win, el) {
    win.addEventListener('scroll', function () {
        if (win.pageYOffset > win.innerHeight) {
            el.style.opacity = 1;
            el.style.pointerEvents = 'all';
        } else {
            el.style.opacity = 0;
            el.style.pointerEvents = 'none';
        }
    })
}