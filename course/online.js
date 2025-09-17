let root = document.querySelector(':root');
window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    root.style.setProperty('--alpha', 1);
  } else {
    let per = window.scrollY / 150;
    if (per <= 1) {
      root.style.setProperty('--alpha', per);
    }
  }
})

// nav
let nav = document.querySelector('.nav');
let navItems = nav.querySelectorAll('.nav-item');
let ham = nav.querySelector('#ham');
let ul = nav.querySelector('.nav ul');
let navConts = document.querySelectorAll('.nav-cont');

ham.addEventListener('click', () => {
  // lock the scroll
  document.body.classList.toggle('lock');
  // move in from right
  ul.classList.toggle('nav-active');
  ham.classList.toggle('active');
})
navItems.forEach((item, ind) => {
  item.addEventListener('click', () => {
    document.body.classList.toggle('lock');
    // scroll to target
    navConts[ind].scrollIntoView();
    ul.classList.toggle('nav-active');

    navItems.forEach(item => {
      item.classList.remove('nav-item-active');
    })
    item.classList.add('nav-item-active');
    ham.classList.toggle('active');
  })
})