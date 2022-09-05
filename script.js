window.onload=function(){
const nav = document.querySelector('.nav-items')
const humburger = document.querySelector('.humburger')
 humburger.addEventListener('click',()=>{
     humburger.classList.toggle('active')
     nav.classList.toggle("active");
 })
}
