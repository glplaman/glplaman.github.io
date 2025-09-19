let nav = document.querySelector('.nav-container');
let navItems = nav.querySelectorAll('.nav-item');
let navConts = document.querySelectorAll('.nav-cont');
let ham = document.querySelector('#ham');
let curInd = 0;
ham.addEventListener('click', () => {
  // lock the scroll
  document.body.classList.toggle('lock');
  // move in from right
  nav.classList.toggle('active');
  ham.classList.toggle('active');
})
navItems.forEach((item, ind) => {
  item.addEventListener('click', () => {
    document.body.classList.toggle('lock');
    // scroll to target
    navConts[ind].scrollIntoView();
    nav.classList.toggle('active');

    navItems.forEach(item => {
      item.classList.remove('active');
    })
    item.classList.add('active');
    ham.classList.toggle('active');
  })
})