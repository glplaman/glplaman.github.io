export default function (dom) {
  // const dom = document.querySelector('#time')
  const y = 10
  function time() {
    dom.innerHTML = Number(dom.textContent) * y
  }
  return { y, time }
}