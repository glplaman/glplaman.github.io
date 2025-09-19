let nav = document.querySelector('.nav');
let navLi = nav.querySelectorAll('.nav>li');
let subNav = nav.querySelectorAll('.sub-nav');
let navItems = nav.querySelectorAll('.nav-item');
let navConts = document.querySelectorAll('.nav-cont');
let ham = document.querySelector('.ham');
let curInd = 0;
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
navLi.forEach((item, ind) => {
  item.addEventListener('mouseover', () => {
    if (ind < 3) {
      subNav[ind].classList.toggle('active');
      curInd = ind;
    }
  })
  item.addEventListener('mouseout', () => {
    if (ind < 3) {
      subNav[ind].classList.toggle('active');
    }
  })
})
navItems.forEach((item, ind) => {
  item.addEventListener('click', () => {
    navConts[ind].scrollIntoView();
    nav.classList.toggle('active');
    document.body.classList.toggle('lock');
    if (ham.classList.contains('icon-menu')) {
      ham.classList.remove('icon-menu');
      ham.classList.add('icon-close');
    } else {
      ham.classList.remove('icon-close');
      ham.classList.add('icon-menu');
    }
    subNav[curInd].style.display = 'none';
  })
})