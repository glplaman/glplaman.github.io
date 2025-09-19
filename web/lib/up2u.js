// localStorage.clear();
// let form = document.querySelector('form');
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   new FormData(form);
// })
// form.addEventListener('formdata', (e) => {
//   const data = e.formData;
//   localStorage.setItem('user', data.get('name'));
//   localStorage.setItem('email', data.get('email'));
//   localStorage.setItem('msg', data.get('msg'));
//   form.reset();
//   alert('data added');
// })

// function FormData2JSON(formdata) {
//   var json = {};
//   var entries = formdata.entries();
//   var item = entries.next();
//   while (!item.done) {
//     json[item.value[0]] = item.value[1];
//     item = entries.next();
//   }
//   return json;
// }
