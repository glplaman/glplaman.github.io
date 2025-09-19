let date, h, m, s;
let oHour = document.querySelector('.hour')
let oMin = document.querySelector('.min')
let oSec = document.querySelector('.sec')
function getTime() {
  date = new Date()
  h = date.getHours() * 30;
  m = date.getMinutes() * 6;
  s = date.getSeconds() * 6;
  oHour.style.transform = `rotateZ(${h + m / 12}deg)`
  oMin.style.transform = `rotateZ(${m}deg)`
  oSec.style.transform = `rotateZ(${s}deg)`

}
getTime()
let tId = setInterval(getTime, 1000)