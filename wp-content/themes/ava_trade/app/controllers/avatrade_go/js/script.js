
(function($) {
    var controller = new ScrollMagic.Controller();
    var ourScene1 = new ScrollMagic.Scene({triggerElement: '#mobileImage',triggerHook:0.8})
    .setClassToggle('#tradingSimple','moveUp')
    .addTo(controller);
    var ourScene2 = new ScrollMagic.Scene({triggerElement: '#phone1',triggerHook:0.7})
    .setClassToggle('#phone1','fadeIn')
    .addTo(controller);
    var ourScene3 = new ScrollMagic.Scene({triggerElement: '#phone2',triggerHook:0.7})
    .setClassToggle('#phone2','fadeIn')
    .addTo(controller);
    var ourScene4 = new ScrollMagic.Scene({triggerElement: '#phone3',triggerHook:0.7})
    .setClassToggle('#phone3','fadeIn')
    .addTo(controller); 
})(jQuery);