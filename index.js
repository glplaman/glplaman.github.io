
let ham = document.querySelector('#ham');
let nav = document.querySelector('header nav');
ham.addEventListener('click', () => {
  nav.classList.toggle('active');
  if (ham.classList.contains('icon-menu')) {
    ham.classList.remove('icon-menu')
    ham.classList.add('icon-cross')
  } else {
    ham.classList.remove('icon-cross')
    ham.classList.add('icon-menu')
  }
})

// hop
let spans = document.querySelectorAll('h1 span');
spans.forEach(span => {
  span.addEventListener('mouseover', () => {
    span.classList.add('active');
  })
  span.addEventListener('animationend', () => {
    span.classList.remove('active');
  })
})

let typed = new Typed('#greeting', {
  strings: ['a Web Designer.', 'in GuangZhou.'],
  typeSpeed: 50,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
  loopCount: 3
});