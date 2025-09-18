fetch("/common/footer.html")
  .then((res) => res.text())
  .then((res) => {
    document.getElementById("footer").innerHTML = res;
  });
