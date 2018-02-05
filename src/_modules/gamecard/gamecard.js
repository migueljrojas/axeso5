'use strict';

// Constructor
var Gamecard = function() {
    var gamecard = $('.gamecard');
    var popup = $('.gamecard__popup');


    if (gamecard) {

        gamecard.each(function(){
            var $this = $(this);
            var trigger = $this.find('.gamecard__trigger');
            var trailer = $this.find('.gamecard__trailer__video');
            var video = trailer.data('src');

            $this.on('mouseenter mouseleave', function() {
                if (!$this.hasClass('gamecard--open')) {

                    $this.toggleClass('gamecard--hover');
                }
            });

            trigger.on('click', function() {
                gamecard.removeClass('gamecard--hover');
                gamecard.removeClass('gamecard--open');
                $this.addClass('gamecard--open');
                trailer.attr('src', video);
                $this.clone().appendTo(popup);
                popup.addClass('gamecard__popup--open');
            });

            $(document).on('click', '.gamecard__close', function() {
                popup.removeClass('gamecard__popup--open');
                gamecard.removeClass('gamecard--open');
                popup.empty();
            })

        });
    }

};

module.exports = Gamecard;
