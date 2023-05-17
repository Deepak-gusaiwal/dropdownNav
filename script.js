const navMenu = document.querySelector('.navMenu');
const navToggler = document.querySelector('.navToggler');

navToggler.addEventListener('click',()=>{
    navMenu.classList.toggle('showNav')
})