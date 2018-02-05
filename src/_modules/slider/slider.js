'use strict';

// Constructor
var Slider = function() {
    var slider = $('._slider');
    var gameSliderTop = $('.gameslider__top');
    var gameSliderBottom = $('.gameslider__bottom');
    var newsSlider = $('.axnews__slider');

    if ( slider && slider.hasClass('gameslider__top') ) {

        gameSliderTop.slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    if ( slider && slider.hasClass('gameslider__bottom') ) {

        gameSliderBottom.slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });
    }

    if ( slider && slider.hasClass('axnews__slider') ) {
        newsSlider.slick({
            dots: true,
            fade: true,
            arrows:  false,
            autoplay: true,
            infinite: true
        });
    }
};

module.exports = Slider;
