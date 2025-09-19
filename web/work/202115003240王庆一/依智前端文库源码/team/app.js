let nav = document.querySelector('nav');
let a = nav.querySelectorAll('a');
nav.addEventListener('click', (e) => {
    console.log(e.target.tagName);
    let tar = e.target;
    if (tar.tagName == 'A') {
        a.forEach(item => {
            item.classList.remove('active');
        })
        tar.classList.add('active');
    }
})