'use strict';

// Constructor
var GameSlider = function() {
    var context = $('.gameslider');

    if (context) {
        var slides = $('.gameslider__item');
        var sliderButtons = $('.gameslider__button');

        slides.first().addClass('-active');
        slides.first().before(slides.last());

        sliderButtons.on('click', function() {
            slides = $('.gameslider__item');
            // Register button
            var button = $(this);
            // Register active slide
            var activeSlide = $('.gameslider__item.-active');

            // Next function
            if (button.data('slide') == 'next') {
                // Move first slide to the end so the user can keep going forward
                slides.last().after(slides.first());
                // Move active class to the right
                activeSlide.removeClass('-active').next('.gameslider__item').addClass('-active');
            }

            // Previous function
            if (button.data('slide') == 'prev') {
                // Move the last slide before the first so the user can keep going backwards
                slides.first().before(slides.last());
                // Move active class to the left
                activeSlide.removeClass('-active').prev('.gameslider__item').addClass('-active');
            }
        });
    }
};

module.exports = GameSlider;
