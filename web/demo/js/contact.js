emailjs.init('MgQhPPBjNMMss5kbw')
const btn = document.getElementById('btn');
const from = document.getElementById('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  btn.innerHTML = '提交中';

  const serviceID = 'service_bokj9m5';
  const templateID = 'template_ur5o2es';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.innerHTML = '提交';
      alert('留言发送成功!');
      form.reset();
    }, (err) => {
      btn.innerHTML = '提交';
      alert(JSON.stringify(err));
    });
});