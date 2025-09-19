banner()
function banner() {
  let swiperBox = document.querySelector('.swiper-box')
  let swiper = swiperBox.querySelector('.swiper')
  let first = swiper.querySelector('li:first-of-type')
  let last = swiper.querySelector('li:last-of-type')
  swiper.appendChild(first.cloneNode(true))
  swiper.insertBefore(last.cloneNode(true), first)
  let lis = swiperBox.querySelectorAll('li')
  let len = lis.length
  let w = swiperBox.offsetWidth
  // must
  swiper.style.width = len * w + 'px'
  for (let i = 0; i < len; i++) {
    lis[i].style.width = w + 'px'
  }
  // 
  let ind = 1
  swiper.style.left = -ind * w + 'px'
  let inter = setInterval(function () {
    ind++
    swiper.style.transition = "left 0.5s ease-in-out"
    swiper.style.left = -ind * w + 'px'
    setTimeout(function () {
      if (ind == len - 1) {
        ind = 1
        swiper.style.transition = "none"
        swiper.style.left = -ind * w + 'px'
      }
    }, 500)
  }, 2000)
}