


    let offset = 0;
    const sliderLine = document.querySelector('#slider-line_1');
document.querySelector('#button_next_1').addEventListener('click', function(){
    alert("hello");
    offset += 150;
    if(offset >= 600) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
    console.log(offset);
    console.log(sliderLine.style.left);
    document.querySelector('#button_next_2').click(); 
});

    let offset1 = 0;
    const sliderLine1 = document.querySelector('#slider-line_2');
document.querySelector('#button_next_2').addEventListener('click', function(){
    alert("hello 2");
    offset1 += 150;
    console.log("22 ", offset1);
    if(offset1 >= 600) {
        offset1 = 0;
    }
    sliderLine1.style.left = -offset1 + 'px';
    console.log(offset1);
    console.log(sliderLine1.style.left);
});