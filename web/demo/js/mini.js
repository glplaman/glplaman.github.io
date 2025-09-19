// 基本思路：数据→界面→事件
let img = document.querySelector('img')
let audio = document.querySelector('audio')
let ul = document.querySelector('.lrc')
let wrapH = document.querySelector('.wrap').clientHeight
let lrcData, lrcH, lrcLineH, deg = 0;

// p1：data
// 字符串→数组对象[{time:XX, str:"XXX"}]
function parseLrc() {
  let arr = [];
  let lrcArr = lrcStr.split('\n')
  lrcArr.forEach(item => {
    let tmp = item.split(']')
    let obj = {
      time: parseTime(tmp[0]),
      str: tmp[1]
    };
    arr.push(obj);
  });
  return arr;
}

// 为了匹配音频时间，需要将时间字段转换为时间
// [1:xx.yy
function parseTime(str) {
  let time = str.substring(1).split(':')
  return +time[0] * 60 + +time[1];
}

lrcData = parseLrc();

// p2：UI
function renderDom() {
  ul.innerHTML = lrcData.map(item => {
    return `<li>${item.str}</li>`
  }).join('')
}

renderDom();
lrcH = ul.clientHeight;
//数据第1行如果换行，转换后是1个空行，高度为0
lrcLineH = ul.children[0].clientHeight

// 验证临界点
function findInd() {
  for (let i = 0; i < lrcData.length; i++) {
    if (audio.currentTime < lrcData[i].time) {
      return i - 1;
    }
  }
  return lrcData.length - 1;
}

// p3：事件
// 验证临界点
function offsetH() {
  let ind = findInd();
  let offset = lrcLineH * ind + lrcLineH / 2 - wrapH / 2;
  if (offset < 0) {
    offset = 0;
  }
  if (offset > lrcH - wrapH) {
    offset = lrcH - wrapH;
  }
  // 上移
  // 负边距：reflow
  // 位移：ok
  ul.style.transform = `translateY(-${offset}px)`;
  // 最开始匹配不到行
  if (ul.children[ind]) {
    for (let i = 0; i < ul.children.length; i++) {
      ul.children[i].classList.remove('active')
    }

    ul.children[ind].classList.add('active')
  }
}

// listening
audio.addEventListener('timeupdate', offsetH)
audio.addEventListener('play', () => {
  img.style.animationPlayState = `running`
})
audio.addEventListener('pause', () => {
  img.style.animationPlayState = `paused`
})