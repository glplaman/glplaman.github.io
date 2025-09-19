window.onload = function () {
    let show_bool = false
    let menu = document.querySelector('#menu')
    let navs = document.querySelectorAll('.main-nav-item')
    menu.addEventListener('touchstart', function (e) {
        console.log(show_bool);
        if (show_bool) {
            navs.forEach((item) => {
                item.style.display = 'none'
            })
        } else {
            navs.forEach((item) => {
                item.style.display = 'block'
            })
        }
        show_bool = !show_bool
    })
}