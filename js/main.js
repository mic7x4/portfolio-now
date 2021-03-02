const bodyElement =  document.querySelector('body');
const menuToggle = document.querySelector('.hamburger__menu');
const heroElement = document.querySelector('.hero');
const navItem = document.querySelector('.nav-list');

menuToggle.addEventListener('click',()=>{
    bodyElement.classList.toggle('is-open');
    heroElement.classList.add('is-open');

});

window.addEventListener('click',(e)=>{
    let clickedElement = e.target;
    if(clickedElement.matches('.is-open')){
        bodyElement.classList.remove('is-open');
        hero.classList.remove('is-open');
        
    }
})

navItem.addEventListener('click',(e)=>{
    let clickedElement = e.target;
    if(clickedElement.classList[0] === 'nav-link') {
        bodyElement.classList.remove('is-open');
    }
})