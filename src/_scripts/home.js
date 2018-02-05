'use strict';

var Home = function(){

    var disableScroll = $('.js-scroll-disable');
    var video = $('.home__content__media__video');
    var videoSelector = $('.home__content__media__video-selector');
    var videoSelected = videoSelector.val();
    var tabs = $('[data-target]');
    var scrollBtnNext = $('.scroller--next');
    var scrollBtnPrev = $('.scroller--prev');
    var sectionIndicator = $('.header__section-index span');
    var sectionLimit = $('.js-section').length - 1;

    function getGames() {

        fetch('http://cmsws.webtest.axeso5.com/website/GetAllJuegos/1').then(function(response) {
            // Convert to JSON
            return response.json();
        }).then(function(games) {

            console.log(games);
        });
    }


    function setSectionActive() {
        var sectionIndex = $.scrollify.currentIndex();

        sectionIndicator.removeClass('-active');
        sectionIndicator.eq(sectionIndex).addClass('-active');
    }

    function setScrollerVisibility() {
        var sectionIndex = $.scrollify.currentIndex();

        if (sectionIndex === 0) {
            scrollBtnPrev.hide();
        } else {
            scrollBtnPrev.show();
        }

        if (sectionIndex === sectionLimit) {
            scrollBtnNext.hide();
        } else {
            scrollBtnNext.show();
        }
    }

    scrollBtnNext.on('click', function() {
        $.scrollify.next();
    });

    scrollBtnPrev.on('click', function() {
        $.scrollify.previous();
    });


    $.scrollify({
        section : '.js-section',
        scrollbars: false,
        setHeights: true,
        sectionName : 'section-name',
        touchScroll: false,
        after:function() {
        }
    });

    disableScroll.on('mouseenter', function(){
        $.scrollify.disable();
    });

    disableScroll.on('mouseleave', function(){
        $.scrollify.enable();
    });

    video.attr('src','https://www.youtube.com/embed/' + videoSelected);
    videoSelector.change(function(){
        videoSelected = videoSelector.val();
        video.attr('src','https://www.youtube.com/embed/' + videoSelected);
    });

    tabs.on('click', function(){
        video.attr('src','https://www.youtube.com/embed/' + videoSelected);
    });

    setSectionActive();
    setScrollerVisibility();
    getGames();
};

module.exports = Home;
