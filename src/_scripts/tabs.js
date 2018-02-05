'use strict';

var Tabs = function() {
    var context = $('[data-tab-collection]');

    if ( context ) {

        context.each(function() {
            var $this = $(this);
            var selectors = $this.find('[data-target]');
            var tabs = $this.find('[data-tab]');
            var tabClose = $this.find('[data-tab-close]');

            if ( $this.data('init') == true ) {
                selectors.first().addClass('-active');
                tabs.first().addClass('-active');
            }

            if (tabClose) {
                tabClose.each(function(){
                    $(this).on('click', function(){
                        selectors.removeClass('-active');
                        tabs.removeClass('-active');
                    });
                });
            }

            selectors.each(function(){
                $(this).on('click',function(){
                    var dataTarget = $(this).data('target');

                    selectors.removeClass('-active');
                    $(this).addClass('-active');

                    tabs.removeClass('-active');
                    tabs.filter(function() {
                        return $(this).data('tab') == dataTarget;
                    }).addClass('-active');
                });
            });
        });
    }
};

module.exports = Tabs;
