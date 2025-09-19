const header = document.querySelector('.header');

const nav = document.querySelector('.nav');


const viewButton = document.querySelector('.btn');





document.addEventListener('scroll', function () {
    header.classList.toggle('active', window.scrollY > 300);
});

window.addEventListener('scrollend', function () {
    nav.classList.remove('active');
});




// 高亮脚本
document.addEventListener('scroll', function () {
    const sections = ['#home', '#info', '#picture', '#sharlin'];
    const navLinks = {
        '#home': document.getElementById('nav-home'),
        '#info': document.getElementById('nav-info'),
        '#picture': document.getElementById('nav-picture'),
        '#sharlin': document.getElementById('nav-sharlin')
    };

    sections.forEach(section => {
        const element = document.querySelector(section);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                // 先移除所有导航链接的active类
                Object.values(navLinks).forEach(link => link.classList.remove('active'));
                // 给当前对应的导航链接添加active类，实现高亮
                navLinks[section].classList.add('active');
            }
        }
    });
});


// 轮播图
const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;
const slideWidth = slides[0].offsetWidth;
let autoSlideInterval;

function goToSlide(index) {
    sliderWrapper.style.transform = `translateX(-${index * slideWidth}px)`;
    currentIndex = index;
    updateIndicators();
}

function updateIndicators() {
    indicators.forEach((indicator, i) => {
        if (i === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        goToSlide(currentIndex - 1);
        resetAutoSlide();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        goToSlide(currentIndex + 1);
        resetAutoSlide();
    }
});

indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        goToSlide(i);
        resetAutoSlide();
    });
});

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        if (currentIndex < slides.length - 1) {
            goToSlide(currentIndex + 1);
        } else {
            goToSlide(0);
        }
    }, 3000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

startAutoSlide();


document.addEventListener('DOMContentLoaded', function() {
    // 获取按钮元素
    var viewButton = document.querySelector('.btn');
    
    // 获取目标section元素
    var infoSection = document.querySelector('#info');
    
    // 为按钮添加点击事件监听器
    viewButton.addEventListener('click', function() {
        // 使用scrollIntoView方法滚动到目标section
        infoSection.scrollIntoView({ behavior: 'smooth' });
    });
});
