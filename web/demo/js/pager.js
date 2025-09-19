let tbl = document.querySelector('table');
let page = document.querySelector('.page');
let preBtn = page.querySelector('.page .pre');
let nextBtn = page.querySelector('.page .next');
let sizePage = 5;
let numPage;
let numsBtn = [];
let cur = 0;
let dataArr;
init();

tbl.addEventListener('click', (e) => {
  if (e.target.tagName == 'BUTTON') {
    console.log(e.target.dataset.id);
  }
})
page.addEventListener('click', (e) => {
  if (e.target.tagName == 'BUTTON') {
    toggleActive(e.target, numsBtn);
    cur = e.target.getAttribute('data-id');
    render(dataArr, cur, sizePage);
  }
})

preBtn.addEventListener('click', () => {
  if (cur > 0) {
    cur--;
  } else {
    cur = numPage - 1;
  }
  toggleActive(numsBtn[cur], numsBtn);
  render(dataArr, cur, sizePage);
})

nextBtn.addEventListener('click', () => {
  if (cur < numPage - 1) {
    cur++;
  } else {
    cur = 0;
  }
  toggleActive(numsBtn[cur], numsBtn);
  render(dataArr, cur, sizePage);
})

function init() {
  fetch('../../../utils/data/data2021/stu.json')
    .then(res => {
      return res.json();
    })
    .then(json => {
      dataArr = Array.from(json);
      // page
      numPage = Math.ceil(dataArr.length / sizePage);
      for (let i = 0; i < numPage; i++) {
        let btn = document.createElement('button');
        btn.setAttribute('data-id', i);
        btn.setAttribute('class', 'page-btn num');
        btn.textContent = i + 1;
        page.insertBefore(btn, page.children[page.children.length - 1]);
        numsBtn.push(btn);
      }
      toggleActive(numsBtn[cur], numsBtn);
      render(dataArr, cur, sizePage);
      // data

    })
}
function render(arr, start, size) {
  initTabel();
  let data = arr.slice(start * size, start * size + size);
  console.log(data);
  data.forEach((item, ind) => {
    let tr = document.createElement('tr');
    for (key in item) {
      tr.innerHTML += `<td>${item[key]}</td>`
    }
    tr.innerHTML += `<td><button class='msg-btn' data-id='${item['id']}'>投票</button> <button class='msg-btn' data-id='${item['id']}'>留言</button></td>`
    tbl.appendChild(tr);
  })
}

function toggleActive(tar, numsBtn) {
  numsBtn.forEach(item => {
    item.classList.remove('active');
  })
  tar.classList.add('active');
}
function initTabel() {
  tbl.innerHTML = `<tr>
  <th>序号</th>
  <th>姓名</th>
  <th>得分</th>
  <th>操作</th>
</tr>`;
}