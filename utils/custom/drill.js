fetch('/common/drill.html')
    .then(res => res.text())
    .then(res => {
        document.getElementById('drill').innerHTML = res;
    })
// function loadModule(url, targetElementId) {
//     fetch(url)
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById(targetElementId).innerHTML = data;
//         })
//         .catch(error => console.error('加载模块时出错:', error));
// }

// document.addEventListener('DOMContentLoaded', () => {
//     loadModule('header.html', 'header');
//     loadModule('footer.html', 'footer');
// });