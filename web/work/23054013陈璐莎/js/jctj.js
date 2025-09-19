let images = document.querySelectorAll('.banner-img');
let currentIndex = 0;

// 显示指定索引的图片
function showImage(index) {
    // 隐藏所有图片
    images.forEach(img => img.style.display = 'none');

    // 显示当前索引对应的图片
    images[index].style.display = 'block';
}

// 设置每3秒切换一次图片
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length; // 循环轮播
    showImage(currentIndex);
}, 3000);  // 每3秒切换一次