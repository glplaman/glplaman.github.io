let navItems = document.querySelectorAll(".nav-item")
let contItems = document.querySelectorAll(".nav-cont")
let ham = document.querySelector("#ham")
let menu = document.querySelector("#menu")


navItems.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    setTimeout(function () {
      contItems[index].scrollIntoView();
      navItems.forEach(item => {
        item.style.color = "#ffffff";
      })
      navItems[index].style.color = "#e95420"
    }, 100)
    ham.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('lock');
  })
})

ham.addEventListener('click', (e) => {
  e.preventDefault();
  ham.classList.toggle('active');
  menu.classList.toggle('active');
  document.body.classList.toggle('lock');
})