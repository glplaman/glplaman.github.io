let nav = document.querySelector('.nav');
let navItems = nav.querySelectorAll('.nav-item');
let navConts = document.querySelectorAll('.nav-cont');
let ham = document.querySelector('.ham');
// let curInd = 0;
ham.addEventListener('click', () => {
  nav.classList.toggle('active');
  document.body.classList.toggle('lock');
  if (ham.classList.contains('icon-menu')) {
    ham.classList.remove('icon-menu');
    ham.classList.add('icon-close');
  } else {
    ham.classList.remove('icon-close');
    ham.classList.add('icon-menu');
  }
})
navItems.forEach((item, ind) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    navConts[ind].scrollIntoView();
    nav.classList.toggle('active');
    navItems.forEach(item => {
      item.classList.remove('active');
    })
    item.classList.add('active');
    document.body.classList.toggle('lock');
    if (ham.classList.contains('icon-menu')) {
      ham.classList.remove('icon-menu');
      ham.classList.add('icon-close');
    } else {
      ham.classList.remove('icon-close');
      ham.classList.add('icon-menu');
    }
  })
})