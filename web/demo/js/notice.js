let tips = document.querySelector('.tips');
let btn = document.querySelector('.btn');
tips.addEventListener('scroll', () => {
  let per = tips.scrollTop / (tips.scrollHeight - tips.offsetHeight);
  if (per >= 0.9) {
    btn.removeAttribute('disabled');
    btn.classList.add('active');
  }
})
btn.addEventListener('click', () => {
  location.href = './up2u.html'
})
