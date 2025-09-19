function s2view(src, des) {
    src.addEventListener('click', function (e) {
        e.preventDefault()
        setTimeout(function () {
            document.querySelector(des).scrollIntoView()
        }, 100)
    })
}