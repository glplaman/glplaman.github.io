const body = document.body;
const mainNav = body.querySelector(".main-nav");
const nav = body.querySelector("#nav");
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

ham.addEventListener("click", (e) => {
  body.classList.toggle("lock");
});

// const div = document.createElement('div')
// mainNav.before(div)
// const ob = new IntersectionObserver(([entry]) => {
//   if (entry.isIntersecting && Math.abs(entry.boundingClientRect.top) <= 1) {
//     mainNav.classList.toggle('sticky', !entry.isIntersecting)
//   }
// }, {
//   rootMargin: `0px 0px 0px 0px`,
//   threshold: 0
// })
// ob.observe(div)

const sentinel = document.createElement('div')
mainNav.before(sentinel)
const ob = new IntersectionObserver(([entry]) => {
  mainNav.classList.toggle('sticky', !entry.isIntersecting)
})
ob.observe(sentinel)