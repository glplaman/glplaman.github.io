export default function (dom) {
  // const dom = document.querySelector('#add')
  const x = 10
  function add() {
    dom.innerHTML = Number(dom.textContent) + x
  }
  return { x, add }
}