const body = document.body
const ham = document.getElementById("ham");
const navWrap = document.getElementById("nav-wrap");
const navItems = navWrap.querySelectorAll(".nav-item");


ham.addEventListener("click", () => {
  body.classList.toggle('lock')
  if (ham.classList.contains("icon-menu")) {
    ham.classList.remove("icon-menu");
    ham.classList.add("icon-close");
  } else {
    ham.classList.remove("icon-close");
    ham.classList.add("icon-menu");
  }
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    ham.classList.remove("icon-close");
    ham.classList.add("icon-menu");
    body.classList.remove('lock')
  });
});
