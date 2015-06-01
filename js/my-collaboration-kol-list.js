'use strict';


$(function() {

  /* =Collapse
  -------------------------------------------------- */
  $('.js-collapse').on('hide.bs.collapse', function () {
    $('.js-arrow').removeClass('ico-opened').addClass('ico-closed');
  });

  $('.js-collapse').on('show.bs.collapse', function () {
    $('.js-arrow').removeClass('ico-closed').addClass('ico-opened');
  });

  /* =Save
  -------------------------------------------------- */
  $('.js-save').on('click',function() {
    $('.js-collapse').collapse('toggle');
  });

});