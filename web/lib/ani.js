let btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  btn.style.animation = 'moveOut 1s 2 forwards'
})
btn.addEventListener('animationend', () => {
  btn.style.pointerEvents = 'none'
})
btn.addEventListener('animationiteration', logging)
function logging() {
  console.log('animationiteration');
}

let txt = document.querySelector('.txt-ani');
let root = document.querySelector(':root');
document.querySelectorAll('.txt-ani-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    root.style.setProperty('--ani', e.target.dataset.ani)
    txt.classList.remove('ani')
    // 移除之后不能马上再添加
    txt.offsetWidth;
    txt.classList.add('ani')
  })
})
// hop
let spans = document.querySelectorAll('.hop span');
spans.forEach(span => {
  span.addEventListener('mouseover', () => {
    span.classList.add('active');
  })
  span.addEventListener('animationend', () => {
    span.classList.remove('active');
  })
})