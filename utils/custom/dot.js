export const dot = (e) => {
  for (let i = 0; i < 100; i++) {
    let dot = document.createElement('i');
    dot.classList.add('dot');

    let size = Math.random() * 8 + 2;
    dot.style.width = size + 'px';
    dot.style.height = size + 'px';

    let posx = (Math.random() - 0.5) * window.innerWidth;
    let posy = (Math.random() - 0.5) * window.innerHeight;
    dot.style.setProperty('--x', posx + 'px')
    dot.style.setProperty('--y', posy + 'px')


    // let fx = e.clientX - e.target.offsetLeft;
    // let fy = e.clientY - e.target.offsetTop;
    // dot.style.left = fx + 'px'
    // dot.style.top = fy + 'px'

    let duration = Math.random() * 2 + 0.5
    dot.style.animation = `dot-move ${duration}s linear forwards `

    e.target.appendChild(dot);

    setTimeout(() => {
      dot.remove()
    }, 2000)
  }
}