let ind = 0;
let navItems = document.querySelectorAll('.nav-item')
let navConts = document.querySelectorAll('.nav-cont')
let nav = document.querySelector('.nav');
let ham = document.querySelector('.ham')
navItems.forEach((item, ind) => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    navConts[ind].scrollIntoView()
    navItems.forEach(item => {
      item.classList.remove('active')
    })
    item.classList.add('active');
    hamToggle()
    nav.classList.toggle('active')
    document.body.classList.toggle('lock')
  })
})
ham.addEventListener('click', () => {
  hamToggle();
  nav.classList.toggle('active')
  document.body.classList.toggle('lock')
})
const hamToggle = () => {
  if (ind) {
    ind = 0;
    ham.classList.remove('icon-close');
    ham.classList.add('icon-menu');
  } else {
    ind = 1
    ham.classList.remove('icon-menu');
    ham.classList.add('icon-close');
  }
}