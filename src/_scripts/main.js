// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.$ = global.jQuery = require('jquery');
global._ = require('underscore');
var Home = require('./home');
var Header = require('../_modules/header/header');
var Slider = require('../_modules/slider/slider');
var GameCard = require('../_modules/gamecard/gamecard');
var AxnewsSlider = require('../_modules/axnews-slider/axnews-slider');
var AxnewsScroller = require('../_modules/axnews-scroller/axnews-scroller');
var Scroller = require('../_modules/scroller/scroller');
var Tabs = require('./tabs.js');

$(function() {
    require('../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.min');
    require('../../bower_components/slick-carousel/slick/slick');
    require('../../bower_components/Scrollify/jquery.scrollify');
    require('../../bower_components/fetch/fetch');

    new Header();
    new Slider();
    new GameCard();
    new Home();
    new Tabs();
    new AxnewsSlider();
    new AxnewsScroller();
    new Scroller();
});
