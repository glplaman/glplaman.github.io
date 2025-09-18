let body = document.querySelector('body')
body.addEventListener('click', function (e) {
  console.log(e.target.tagName);
  let dot = document.createElement('div');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  // 计算鼠标在页面上的绝对位置
  var pageX = event.clientX + scrollLeft;
  var pageY = event.clientY + scrollTop;
  dot.style.left = (e.clientX + scrollLeft) + 'px';
  dot.style.top = (e.clientY + scrollTop) + 'px';
  let hue = Math.random() * 360
  dot.style.filter = `hue-rotate(${hue}deg)`
  for (let index = 0; index < 8; index++) {
    let span = document.createElement('span');
    span.style.transform = `rotate(${index * 45}deg)`
    dot.appendChild(span)
  }

  dot.classList.add('dot');
  body.appendChild(dot)
  setTimeout(function () {
    dot.remove()
  }, 1000)
},)