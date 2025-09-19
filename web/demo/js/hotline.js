let ind = 0;
let flag = false;
let basUrl = '/utils/video/responsive/';
let urls = ['1.1移动web-网页布局方式.mp4', '1.2移动web-响应式布局的简单说明.mp4', '1.3移动web-什么是响应式开发.mp4', '2.1移动web-初体验媒体查询的语法.mp4', '2.2移动web-媒体查询的条件判断的顺.mp4', '2.3移动web-媒体查询的条件判断.mp4', '2.4移动web-媒体查询中的媒体功能.mp4', '2.5移动web-媒体查询补充说明.mp4', '2.6移动web-使用媒体查询设置页面布局.mp4', '2.7移动web-常见的响应式框架简单.mp4', '3.1移动web-bootstrap简单介绍.mp4', '3.2移动web-bootstrap简单介绍.mp4', '3.3移动web-bootstrap的模板文件.mp4', '3.4移动web-bootstrap中的布局容.mp4', '3.5移动web-bootstrap中的栅格系.mp4', '3.6移动web-bootstrap栅格系统的.mp4', '3.7移动web-bootstrap栅格系统的其.mp4', '4.1移动web-less环境的搭建.mp4', '4.2移动web-less语法说明.mp4'];
let video = document.querySelector('.video-box video');
let figcap = document.querySelector('.video-box figcaption');
let swi = document.querySelector('#cb');
let lists = document.querySelectorAll('.video-list .list');
video.src = basUrl + urls[ind];
swi.addEventListener('change', () => {
  flag = !flag;
})
lists.forEach((list, index) => {
  list.addEventListener('click', (e) => {
    console.log(index);
    playVideo(index);
  })
})
video.addEventListener("mouseover", () => {
  video.controls = true
})
video.addEventListener("mouseout", () => {
  video.controls = false
})
video.addEventListener('ended', () => {
  ind++;
  if (ind > urls.length - 1) {
    ind = 0;
  }
  if (flag)
    playVideo(ind);
})

function playVideo(index) {
  video.src = basUrl + urls[index];
  figcap.innerHTML = urls[index];
  video.play();
  lists.forEach(item => {
    item.classList.remove('active');
  })
  lists[index].classList.add('active');
  ind = index;
}

