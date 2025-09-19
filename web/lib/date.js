let date = new Date()
date.setTime(3600000 * 24);
date.setTime(-3600000 * 24);

// count
let clockBtn = document.querySelector('.clock-btn');
let week_arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
let year = document.querySelector('#yy')
let mon = document.querySelector('#mon')
let day = document.querySelector('#day')
let week = document.querySelector('#week')
let hh = document.querySelector('#hh')
let min = document.querySelector('#min')
let sec = document.querySelector('#sec')
showData();
clockBtn.addEventListener('click', () => {
  let inter = setInterval(() => {
    showData();
  }, 1000)
})
function showData() {
  let date = new Date();
  year.innerHTML = date.getFullYear();
  mon.innerHTML = date.getMonth() + 1;
  day.innerHTML = date.getDate();
  week.innerHTML = week_arr[date.getDay()];
  hh.innerHTML = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
  min.innerHTML = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
  sec.innerHTML = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
}

// count down
let cd = document.querySelector('#cd')
let ch = document.querySelector('#ch')
let cm = document.querySelector('#cm')
let cs = document.querySelector('#cs')
let oldday = new Date('2023-07-01 00:00:00')
let cinter = setInterval(() => {
  let newday = new Date()
  let secs = parseInt((oldday - newday) / 1000)
  if (secs < 0) {
    clearInterval(cinter)
    return
  }
  cd.innerHTML = parseInt(secs / 60 / 60 / 24)
  ch.innerHTML = parseInt(secs / 60 / 60 % 24)
  cm.innerHTML = parseInt(secs / 60 % 60)
  cs.innerHTML = secs % 60 > 9 ? secs % 60 : '0' + secs % 60
}, 1000)

// cds
let cdsBtn = document.querySelector('.cds-btn');
let cds = document.querySelector('#cds');
// 特殊的，60秒以内的，可以直接减
// let time = 10;
// let cdsinter = setInterval(() => {
//   time--;
//   if (time < 0) {
//     clearInterval(cdsinter)
//     return
//   }
//   cds.innerHTML = time
// }, 1000)
// 任意时间
let cdTime = 1 * 60 * 60;
showTime();
cdsBtn.addEventListener('click', () => {
  let cdTimer = setInterval(() => {
    cdTime--;
    if (cdTime < 0) {
      clearInterval(cdTimer);
    }
    showTime();
  }, 1000);
})
function showTime() {
  let h = Math.floor(cdTime / 3600);
  let m = Math.floor(cdTime % 3600 / 60);
  let s = cdTime % 60;
  cds.innerHTML = h + ':' + m + ':' + s;
}