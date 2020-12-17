import './style.scss';

const goToSelect = document.getElementById('slide-select');

const slide = document.querySelector('.slide');
const slideContent = document.querySelectorAll('.slide .content');

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let counter = 1;
let startX = 0;
let endX = 0;

const size = slideContent[0].clientWidth; 
slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

const galleryContent = Array.from(document.querySelector('.gallery').children);
galleryContent.map((el, i, arr )=> el.style.width = 200/arr.length + "%");

window.onload = function setSlideOptions(){
    let options = slideContent.length - 2;
    while(options != 0){
        let option = document.createElement('option');
        option.value = options;
        option.innerHTML = options;
        goToSelect.append(option);
        if(options === 1){
            option.selected = 'selected';
        }
        options--
    }
}


goToSelect.addEventListener('change', goToSlide)

function goToSlide() {
        let selected = parseInt(goToSelect.value);
        if(selected  > counter ){
            counter = selected - 1;

            moveRight()
        } else if(selected  < counter){
            counter = selected + 1;
            moveLeft()
           
        }

   

    
}


function moveRight(){
    if (counter >= slideContent.length-1) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter++
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

function moveLeft(){
    if (counter <= 0) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}


next.addEventListener('click', moveRight);
prev.addEventListener('click', moveLeft);

slide.addEventListener('transitionend', ()=>{
    if (slideContent[counter].id === "last") {
        slide.style.transition = "none";
        counter = slideContent.length - 2;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (slideContent[counter].id === "first") {
        slide.style.transition = "none";
        counter = slideContent.length -counter;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

});

slide.addEventListener('touchstart', (e)=>{
    startX = e.touches[0].screenX
   
}
)

slide.addEventListener('touchend', (e)=>{
    endX = e.changedTouches[0].screenX
    if (endX < startX) {
        moveRight();
    }
    if (endX > startX) {
        moveLeft();
    }
}
)
