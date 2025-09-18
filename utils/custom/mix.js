let theme = document.getElementById("theme");
let ham = document.getElementById("ham");
let navs = document.querySelectorAll(".nav-item");

theme.onclick = function () {
  document.body.classList.toggle("dark-mode");
  theme.classList.toggle("active");
};

ham.addEventListener("click", () => {
  ham.classList.toggle("active");
  if (ham.classList.contains("icon-menu")) {
    ham.classList.remove("icon-menu");
    ham.classList.add("icon-close");
  } else {
    ham.classList.remove("icon-close");
    ham.classList.add("icon-menu");
  }
});

navs.forEach((nav) => {
  nav.addEventListener("click", () => {
    ham.classList.remove("active");
    ham.classList.remove("icon-close");
    ham.classList.add("icon-menu");
  });
});
