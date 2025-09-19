document.onkeydown = function (e) {
  return false;
  // if (e.key == 'F12') {
  //   return false;
  // } else if ((e.key = 'ctrl') && (e.key == 'u')) {
  //   return false;
  // } else if ((e.key = 'ctrl') && (e.key == 's')) {
  //   return false;
  // } else if ((e.key = 'ctrl') && (e.key == 'U')) {
  //   return false;
  // } else if ((e.key = 'ctrl') && (e.key == 'S')) {
  //   return false;
  // } else if ((e.key = 'ctrl') && (e.key = 'shift') && (e.key == 'i')) {
  //   return false;
  // } else if ((e.key = 'ctrl') && (e.key = 'shift') && (e.key == 'I')) {
  //   return false;
  // }
}
let contM = document.querySelector('#contM');
let inter;
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  clearTimeout(inter);
  let l = e.clientX + document.documentElement.scrollLeft;
  let t = e.clientY + document.documentElement.scrollTop;
  contM.style.left = l + 'px';
  contM.style.top = t + 'px';
  contM.style.display = 'block';
  inter = setTimeout(() => {
    contM.style.display = 'none';
  }, 3000)
})