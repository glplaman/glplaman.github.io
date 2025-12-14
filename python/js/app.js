const ham = document.getElementById('ham');
const aside = document.getElementById('aside');
const links = aside.querySelectorAll('a');
const toggleAside = () => {
  if (document.body.classList.contains('locked')) {
    document.body.classList.remove('locked');
  }
}
links.forEach(link => {
  link.addEventListener('click', () => {
    toggleAside()
    links.forEach(link => {
      link.classList.remove('active')
    })
    link.classList.add('active');
  })
})

ham.addEventListener('click', (e) => {
  e.stopPropagation()
  document.body.classList.toggle('locked');
});

document.addEventListener('click', (e) => {
  toggleAside()
});