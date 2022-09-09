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

// form validation
const email = document.getElementById('mail');
const lowerCase = email.value.toLowerCase();
const submit = document.querySelector('.sub');
submit.addEventListener('click', (e) => {
  if (email !== lowerCase) {
    e.preventDefault();
    document.querySelector('#text').innerHTML = 'error: email cannot be uppercase';
}
});