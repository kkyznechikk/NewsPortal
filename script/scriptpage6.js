let offset = 0;
const sliderLine= document.querySelector('.slider__line');
document.querySelector('.btn-left').addEventListener('click', function(){
    offset = offset + 500;
    if (offset > 1000) {
        offset = 0;
    }
    sliderLine.style.left = - offset + 'px';
});

document.querySelector('.btn-right').addEventListener('click', function(){
    offset = offset - 500;
    if (offset < 0) {
        offset = 1000;
    }
    sliderLine.style.left = - offset + 'px';
});