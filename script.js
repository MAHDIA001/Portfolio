const nav = document.querySelector('.nav-items');
const humburger = document.querySelector('.humburger');
humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  nav.classList.toggle('active');
});
document.querySelectorAll('.nav-item').forEach((n) => n.addEventListener('click', () => {
  humburger.classList.remove('active');
  nav.classList.remove('active');
}));

const name = document.getElementById('name')

const textarea =  document.getElementById('textare')
const name = document.getElementById('name');
const form = document.getElementById('form')
 form.addEventListener('input',()=> {
  const nameobject = {
    firstName: `${name.value}`,
    emails: `${email.value}`,
    text: `${textarea.value}`,
  }; 
  localStorage.setItem('nameobject', JSON.stringify(nameobject));
});

function getLocalStorage() {
  const newObj =JSON.parse(window.localStorage.getItem('nameobject'));
  name.value = newObj.firstName;
  email.value = newObj.emails;
  textarea.value = newObj.text;
}
getLocalStorage()
