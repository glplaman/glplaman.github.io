let ind = 0;
let nav = document.getElementById('nav');
let navConts = document.querySelectorAll('.nav-cont')
let navItems = nav.querySelectorAll('.nav-item')

navItems.forEach((item, ind) => {
  item.addEventListener('click', (e) => {
    e.preventDefault()

    navConts[ind].scrollIntoView()

    navItems.forEach(item => {
      item.classList.remove('active')
    })
    item.classList.add('active');
  })
})