let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset += 150;
    if(offset >= 600) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
    console.log(offset);
    console.log(sliderLine.style.left);
});