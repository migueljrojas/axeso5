'use strict';

// Constructor
var AxnewsSlider = function() {
    var context = $('.axnews-slider');

    if (context) {
        var slides = $('.axnews-slider__slide'),
            nav = $('.axnews-slider__nav__item'),
            slidesLength = slides.length,
            cycle;


        function changeSlide() {
            var currentSlide = slides.filter('.-active');
            var slideIndex = currentSlide.index();

            if ( slideIndex < slidesLength - 1) {
                slideIndex++;
            } else {
                slideIndex = 0;
            }

            slides.removeClass('-active');
            nav.removeClass('-active');
            slides.eq(slideIndex).addClass('-active');
            nav.eq(slideIndex).addClass('-active');
        }

        function autoRotate() {
            cycle = setInterval(changeSlide, 3000);
        }

        function stopSlider() {
            clearInterval(cycle);
        }

        function init() {
            slides.first().addClass('-active');
            nav.first().addClass('-active');

            autoRotate();
        }

        nav.each(function() {
            var $this = $(this),
                navIndex = $this.index();

            $this.on('click', function(){
                if ( $this.hasClass('-active') ) {
                    return false;
                } else {
                    stopSlider();

                    slides.removeClass('-active');
                    nav.removeClass('-active');

                    slides.filter(function() {
                        return $(this).index() == navIndex;
                    }).addClass('-active');
                    $this.addClass('-active');

                    autoRotate();
                }
            });
        });

        init();

        console.log('news slider!');
    }
};

module.exports = AxnewsSlider;
