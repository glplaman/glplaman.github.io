const body = document.body;
const theme = body.querySelector("#theme");
const nav = body.querySelector("nav");
const items = body.querySelectorAll(".nav-item");
const navConts = body.querySelectorAll(".nav-cont");
const ham = body.querySelector("#ham");

const toggleLock = () => {
  if (body.classList.contains("lock")) {
    body.classList.remove("lock");
  }
};
items.forEach((item, ind) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleLock();
    navConts[ind].scrollIntoView({ behavior: "smooth", container: "nearest" });

    items.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});

ham && ham.addEventListener("click", (e) => {
  body.classList.toggle("lock");
});

const back2top = document.querySelector("#back2top");
document.addEventListener("scroll", () => {
  back2top && back2top.classList.toggle("active", scrollY > innerHeight / 4);
  nav.classList.toggle("active", scrollY > innerHeight / 4);
  setTimeout(() => {
    ack2top && back2top.classList.remove("active");
  }, 10000);
});

theme &&
  theme.addEventListener("click", () => {
    body.classList.toggle("dark");
  });
