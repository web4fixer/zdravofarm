$(document).ready(function() {
    $('.burger-box').click(function () {
        $(this).toggleClass('open');
    });




    $('.modal-toggle-button').click(function () {
        $('.modal-wrapper').toggleClass('active');
    });

    $('.menu-toggle-button').click(function () {
        $('.menu-wrapper').toggleClass('active');
    });




    var sliderSlides = document.querySelectorAll('.slider .slider-item');
    var count = 0;

    sliderSlides[0].classList.add('active');
    setTimeout(addSlideEndClass, 4000);

    function addSlideEndClass(){
        sliderSlides[count].classList.add('test');
        count ++;
        if(count == sliderSlides.length){
            count = 0;
        }
    }

    setInterval(function () {
        $('.slider .slider-item').removeClass('active');
        $('.slider .slider-item').removeClass('test');
        sliderSlides[count].classList.add('active');
        setTimeout(addSlideEndClass, 4000);
    }, 5000);



    // setInterval(function() {
    //     $('.slider-item.active')
    //         .removeClass("active")
    //         .next()
    //         .addClass("active")
    // }, 2000);



});

