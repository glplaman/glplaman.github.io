// swiper
const swiperInfo = document.querySelectorAll('.swiper-info')
const swiper = new Swiper('.swiper', {
  loop: true,
  // autoplay: true,
  // grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

swiper.on('slideChange', () => {
  console.log('改变了，realIndex为' + swiper.realIndex);
  anime({
    targets: swiperInfo[swiper.realIndex].children,
    opacity: [0, 1],
    duration: 400,
    easing: "linear",
    delay: anime.stagger(400, { start: 300 }),
    translateY: [anime.stagger(40, 10), 0],
  })
}
)

// isotope
const isotope = new Isotope(".item-wrap", {
  itemSelector: ".item",
  layoutMode: 'fitRows',
  percentPosition: true,
  fitRows: {
    gutter: '.gutter-sizer'
  },
});
const btns = document.querySelector(".btns-wrap");
btns.addEventListener("click", (e) => {
  let { target } = e;
  let ind = target.getAttribute("data-filter");
  console.log(ind);
  if (ind) {
    document.querySelectorAll(".btn.active").forEach((btn) => {
      btn.classList.remove("active");
      target.classList.add("active");
      isotope.arrange({ filter: ind });
    });
  }
});

// scrollReveal
// scrollReveal option
const revealOption = {
  delay: 300,
  distance: "50px",
  duration: 300,
  easing: "ease-in-out",
  origin: "bottom",
};
ScrollReveal().reveal(".feature-item", { ...revealOption, interval: 350 });
ScrollReveal().reveal(".service-item", { ...revealOption, interval: 350 });
ScrollReveal().reveal(".team-item", { ...revealOption, interval: 350 });
ScrollReveal().reveal(".news-item", { ...revealOption, interval: 350 });
ScrollReveal().reveal(".data-item", {
  afterReveal: (el) => {
    let ipt = el.querySelector('.num');
    console.log('ipt', ipt);
    anime({
      targets: ipt,
      value: [0, ipt.value],
      duration: 2000,
      round: 1,
      easing: 'easeInExpo',
    })
  }
});

// anime
const animeIpt = () => {
  anime: ({
    targets: '.data-item .num',
    value: [0, 234],
    duration: 2000,
    round: 1,
    easing: 'easeInExpo'
  })
}