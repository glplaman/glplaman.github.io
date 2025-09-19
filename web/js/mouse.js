// let move = document.querySelector('#inner-cursor');
// console.log(move);
// move.addEventListener('mousedown', fmd);
// move.addEventListener('mouseup', fmu);
// // move.onmousedown = function (e) {
// //   let left = e.clientX - move.offsetLeft;
// //   let top = e.clientY - move.offsetTop;
// //   move.onmousemove = function (ev) {
// //     move.style.left = ev.clientX - left + 'px';
// //     move.style.top = ev.clientY - top + 'px';
// //   }
// //   move.onmouseup = function () {
// //     move.onmousemove = null;
// //   }
// // }
// let leftPos, topPos;
// function fmd(e) {
//   leftPos = e.clientX - move.offsetLeft;
//   topPos = e.clientY - move.offsetTop;
//   document.addEventListener('mousemove', fmm);
// }
// function fmm(e) {
//   let disX = e.clientX - leftPos;
//   let disY = e.clientY - topPos;
//   if (disX < 0) {
//     disX = 0;
//   } else if (disX >= document.documentElement.clientWidth - move.offsetWidth) {
//     disX = document.documentElement.clientWidth - move.offsetWidth;
//   }
//   console.log(document.documentElement.clientHeight);
//   if (disY < 0) {
//     disY = 0;
//   } else if (disY > document.documentElement.clientHeight - move.offsetHeight) {
//     disY = document.documentElement.clientHeight - move.offsetHeight;
//   }
//   move.style.left = disX + 'px';
//   move.style.top = disY + 'px';
// }
// function fmu() {
//   document.removeEventListener('mousemove', fmm);
// }