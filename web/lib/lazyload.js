const ob = new IntersectionObserver(cb);
const obImgs = document.querySelectorAll('.ob-img');
obImgs.forEach(img => {
  ob.observe(img);
})
function cb(enties) {
  enties.forEach(entry => {
    if (entry.isIntersecting) {
      let img = entry.target;
      // img.setAttribute('src', img.getAttribute('data-src'));
      img.src = img.dataset.src;
      ob.unobserve(entry.target);
    }
  })
}