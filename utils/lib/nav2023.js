let body = document.body
let mainNav = document.querySelector('#main-nav')
let ham = mainNav.querySelector('#ham')
let nav = mainNav.querySelector('#nav')
let items = nav.querySelectorAll('.nav-item')
let conts = document.querySelectorAll('.nav-cont')
ham.addEventListener('touchstart', function (e) {
    nav.classList.toggle('nav-active')
    body.classList.toggle('body-active')
})
nav.addEventListener('click', (e) => {
    let item = e.target
    if (item.tagName == 'A') {
        e.preventDefault()
        conts[item.dataset.ind].scrollIntoView()
        nav.classList.remove('nav-active')
        body.classList.remove('body-active')
        items.forEach((item, ind) => {
            item.classList.remove('nav-item-active')
        })
        item.classList.add('nav-item-active')
    }
})