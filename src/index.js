import './style.scss';

const slide = document.querySelector('.slide');
const slideContent = document.querySelectorAll('.slide .content');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let counter = 1;
const size = slideContent[0].clientWidth; 
slide.style.transform = 'translateX(' + (-size * counter) + 'px)';


next.addEventListener('click', ()=>{
    if (counter >= slideContent.length-1) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter++
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prev.addEventListener('click', ()=>{
    if (counter <= 0) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

slide.addEventListener('transitionend', ()=>{
    if (slideContent[counter].id === "last") {
        slide.style.transition = "none";
        counter = slideContent.length -2;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (slideContent[counter].id === "first") {
        slide.style.transition = "none";
        counter = slideContent.length -counter;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

});


