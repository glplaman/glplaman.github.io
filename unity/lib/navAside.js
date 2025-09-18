let navItems = document.querySelectorAll(".nav-item")
let contItems = document.querySelectorAll(".nav-cont")

navItems.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    contItems[index].scrollIntoView();
    navItems.forEach(item => {
      item.classList.remove('active');
    })
    navItems[index].classList.add('active');
  })
})