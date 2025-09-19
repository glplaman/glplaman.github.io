let wrap = document.querySelector('.wrap');
let loginBtn = document.querySelector('#login');
let registerBtn = document.querySelector('#register');
let closeBtn = document.querySelector('#close');
let hamBtn = document.querySelector('#ham');
registerBtn.addEventListener('click', () => {
  wrap.classList.add('active');
})
loginBtn.addEventListener('click', () => {
  wrap.classList.remove('active');
})
hamBtn.addEventListener('click', () => {
  wrap.classList.add('pop-active');
})
closeBtn.addEventListener('click', () => {
  wrap.classList.remove('pop-active');
})