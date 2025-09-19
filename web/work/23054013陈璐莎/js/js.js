let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".carousel img");
    const totalSlides = slides.length;

    // 更新当前索引
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;

    // 移动轮播图
    document.querySelector(".carousel").style.transform = `translateX(-${currentIndex * 100}%)`;
}

// 自动播放轮播图
setInterval(() => moveSlide(1), 3000); // 每3秒自动切换
