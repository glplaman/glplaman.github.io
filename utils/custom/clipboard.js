// const copys = document.querySelectorAll('.copy')
// copys.forEach(copy => {
//   copy.addEventListener('click', () => {
//     console.log(copy.nextSibling.textContent);
//     navigator.clipboard.writeText(copy.nextSibling.textContent)
//   })
// })

const pres = document.querySelectorAll('pre')
pres.forEach(pre => {
  pre.addEventListener('click', (e) => {
    console.log(e.target.textContent);
    navigator.clipboard.writeText(e.target.textContent)
  })
})