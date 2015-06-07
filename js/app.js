'use strict';

$(function() {
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