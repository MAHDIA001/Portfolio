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