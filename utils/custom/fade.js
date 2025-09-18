const mask = document.getElementsByClassName("mask")[0]
const links = document.getElementsByClassName("fade-link")
console.log(links);

links.forEach(link => {
    console.log('link');

    link.addEventListener("click", (e) => {
        e.preventDefault()
        let target = e.currentTarget.href

        mask.classList.add("fade-out")
        mask.addEventListener("animationend", () => {
            window.location.href = target
        })
    })
})