fetch("/common/back2top2025.html")
  .then((res) => res.text())
  .then((res) => {
    let back2top = document.getElementById("back2top");

    back2top.innerHTML = res;
    document.addEventListener("scroll", () => {
      back2top.classList.toggle("active", scrollY > innerHeight / 2);
    });
  });
