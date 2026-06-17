export default async () => {
  const json = await fetch("/common/footer.html")
  const res = await json.text()
  document.getElementById("footer").innerHTML = res;
}
