'use strict';

/*
-- Table of content

 =jQuery plug-in: Custom Fn.
 =jQuery plug-in: Page Fn.
 =Main
-------------------------------------------------- */

(function( $ ) {

    /* =jQuery Fn.
    -------------------------------------------------- */
    $.fn.collapseArrow = function() {
      $(this).on('hide.bs.collapse', function () {
        $('.js-arrow').removeClass('ico-opened').addClass('ico-closed');
      });

      $(this).on('show.bs.collapse', function () {
        $('.js-arrow').removeClass('ico-closed').addClass('ico-opened');
      });
    };

    /* =jQuery plug-in: Page Fn.
    -------------------------------------------------- */
    $.fn.pageStep3 = function() {
      //
    };

}( jQuery ));

/* =Main
-------------------------------------------------- */
  $(function() {
    $('body.step-3').pageStep3();
    $('.js-collapse').collapseArrow();


    // Todo: Nav - Restructure
    $('.js-sub-menu').mouseover(function() {
      $(this).children(':nth-child(2)').show().mouseout(function() {
        $(this).hide().next().css({
          transform: "rotate(0deg)"
        });
      });
      $(this).children(':nth-child(3)').css({
        transform: "rotateX(180deg)"
      });
    });

  });