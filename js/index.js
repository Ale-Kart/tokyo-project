const navButtonMobile = document.querySelector('.nav-button');
const navBarMobile = document.querySelector('nav');
navButtonMobile.addEventListener('click', ()=>{
    navBarMobile.classList.toggle('active')
    
})
console.log(navBarMobile);