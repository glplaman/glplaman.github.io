const header = document.getElementsByTagName('header')[0]
console.log(header);

const div = document.createElement('div')
header.before(div)
const ob = new IntersectionObserver(entry => {
  header.classList.toggle('sticky', !entry[0].isIntersecting)
})
ob.observe(div)