const back2top = document.querySelector(".back2top");
document.addEventListener("scroll", () => {
  back2top.classList.toggle("active", scrollY > innerHeight / 4);
});
