const obImgs = document.querySelectorAll('.ob-img');
const ob = new IntersectionObserver(cb);
obImgs.forEach(img => {
  ob.observe(img);
})
function cb(enties) {
  enties.forEach(entry => {
    if (entry.isIntersecting) {
      let img = entry.target;
      img.setAttribute('src', img.getAttribute('data-src'));
      ob.unobserve(img);
    }
  })
}