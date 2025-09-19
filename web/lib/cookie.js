let form = document.querySelector('#rem');
let uname = form.querySelector('#uname');
let cb = form.querySelector('#cb');
let clearBtn = form.querySelector('#clear-btn');

let setCookie = function (name, value, day = 2) {
  let d = new Date();
  d.setDate(d.getDate() + day);
  document.cookie = `${name}=${value};expires=${d}`;
}
let getCookie = function (name) {
  let arr = document.cookie.split('; ');
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i].split('=');
    if (name == tmp[0]) {
      return tmp[1];
    }
  }
  return '';
}

let clearCookie = function (name) {
  setCookie(name, '', -1);
}

if (getCookie('name')) {
  uname.value = getCookie('name');
  cb.checked = true;
}
form.addEventListener('submit', (e) => {
  if (cb.checked) {
    setCookie('name', uname.value);
  }
})
clearBtn.addEventListener('click', () => {
  clearCookie('name');
  uname.value = '';
  cb.checked = false;
})
