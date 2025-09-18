let theme = document.getElementById("theme");
let ham = document.getElementById("ham");
let navWrap = document.getElementById("nav-wrap");
let navItems = navWrap.querySelectorAll(".nav-item");

theme.onclick = function () {
  document.body.classList.toggle("dark-mode");
  if (theme.classList.contains("icon-Sun")) {
    theme.classList.remove("icon-Sun");
    theme.classList.add("icon-Moon-Star");
  } else {
    theme.classList.remove("icon-Moon-Star");
    theme.classList.add("icon-Sun");
  }
};

ham.addEventListener("click", () => {
  ham.classList.toggle("active");
  if (ham.classList.contains("icon-menu")) {
    ham.classList.remove("icon-menu");
    ham.classList.add("icon-close");
    navWrap.classList.add("active");
  } else {
    ham.classList.remove("icon-close");
    ham.classList.add("icon-menu");
    navWrap.classList.remove("active");
  }
});

navItems.forEach((nav) => {
  navWrap.addEventListener("click", () => {
    ham.classList.remove("active");
    ham.classList.remove("icon-close");
    ham.classList.add("icon-menu");
    navWrap.classList.remove("active");
  });
});
