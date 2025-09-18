let ind = 0;
let header = document.querySelector('header');
let navItems = document.querySelectorAll('.nav-item')
let navConts = document.querySelectorAll('.nav-cont')
let nav = document.querySelector('.nav');
let ham = document.querySelector('.ham')

navItems.forEach((item, ind) => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    e.stopPropagation()

    header.classList.toggle('active')

    navConts[ind].scrollIntoView()

    navItems.forEach(item => {
      item.classList.remove('active')
    })
    item.classList.add('active');
  })
})

ham.addEventListener('click', (e) => {
  header.classList.toggle('active')
})
