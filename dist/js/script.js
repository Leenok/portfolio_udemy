const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElement = document.querySelector('.menu__close');


hamburger.addEventListener('click', ()=>{
    menu.classList.add('active');
});

closeElement.addEventListener('click', ()=>{
    menu.classList.remove('active');
})

const counters = document.querySelectorAll('.part-count');
const lines = document.querySelectorAll('.part__view-color');

counters.forEach((item, i) =>{
    lines[i].style.width = item.innerHTML;
})