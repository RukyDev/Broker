jQuery(function ($) {  
    //========================================
    //TABS MENU
    //========================================
  //   if ((window.location.pathname === "/forex" || window.location.pathname === "/forex/what-is-forex") && siteLang === "zh-hant") {
  //       jQuery('ul#foobar li:first-child ').hide();
  //   }

    jQuery('.menu-tabs .tabs-title').has('.subchildren a').addClass('has-children');
    jQuery('.menu-tabs .subchildren li').has('.subchildren2 a').addClass('has-children_2');
    jQuery('.menu-tabs li.has-children_2 > a').addClass('sub_parent');
    jQuery('.menu-tabs .subchildren2 li.has-children_2 > a').removeClass('sub_parent');
    jQuery('.menu-tabs li.has-children > a.parent , .menu-tabs li.has-children > a.sub_parent ').on('click', function (e) {
        var $this = jQuery(this),
            $parent = $this.parent();
        if (!$parent.hasClass('open')) {
            e.preventDefault();
            $parent.find('>ul').slideToggle();
            $parent.find('>a').toggleClass('is-open');
        }
    });
    if (jQuery('.has-children').find('.is-active:not(.parent)')) {
        // e.preventDefault();
        var elem = jQuery('.has-children').find('.is-active:not(.parent)');
        elem.parent().parent().slideToggle();
        elem.parents('ul.subchildren').siblings('.parent').toggleClass('is-open');
    }
    jQuery('.menu-tabs li.has-children > a.parent span , .tabs-menu-template .menu-tabs .subchildren .tabs-title.has-children a.sub_parent span').click(function () {
        // console.log(jQuery(this).parent().attr('href'));
        window.location.href = jQuery(this).parent().attr('href');
    });
    // Menu Tabs
    jQuery(".tabs-mobile").on("click", function () {
        jQuery(this).toggleClass('active');
        jQuery('.menu-tabs').toggleClass('active');
    });
    jQuery(".tabs-title  a").on("click", function () {
        jQuery('.tabs-title  a').addClass('active');
    });
  });