const nav = document.querySelector('.nav');
const ham = nav.querySelector('.ham');
const navItems = nav.querySelectorAll('.nav-item')
const navConts = document.querySelectorAll('.nav-cont')

navItems.forEach((item, ind) => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    navConts[ind].scrollIntoView()
    navItems.forEach(item => {
      item.classList.remove('active')
    })
    item.classList.add('active');
    nav.classList.remove('active');
  })
})

ham && ham.addEventListener('click', () => {
  nav.classList.toggle('active');
})