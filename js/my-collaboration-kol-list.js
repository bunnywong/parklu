'use strict';


$(function() {

  /* =Collapse
  -------------------------------------------------- */
  $('.js-collapse').on('hide.bs.collapse', function () {
    var group = $(this).data('group');

    $('.js-content-switch-arrow[data-group="'+group+'"]').children('.js-arrow').removeClass('ico-opened').addClass('ico-closed');
  });

  $('.js-collapse').on('show.bs.collapse', function () {
    var group = $(this).data('group');

    $('.js-content-switch-arrow[data-group="'+group+'"]').children('.js-arrow').removeClass('ico-closed').addClass('ico-opened');
  });

  /* =Dropdown Sorting
  -------------------------------------------------- */
  $('.js-ul-dropdown-sort li')
    .on('mouseover', function() {
      $(this).next('li').children('a').addClass('transparent-top-border');
      // alert($(this).next('li').children('a').length)
    }).on('mouseout', function() {
      $(this).next('li').children('a').removeClass('transparent-top-border');
    });

  /* =Save
  -------------------------------------------------- */
  $('.js-save').on('click',function() {
    $('.js-collapse').collapse('toggle');
  });

  // Checkbox

  $('.js-checkbox').on('change', function() {
    var groupName       = $(this).data('group');
    var name            = $(this).data('name');
    var type            = $(this).data('type');
    var checked         = $(this).is(':checked');
    var checkedChildQty = $('.js-checkbox[data-type="child"][data-group="' + groupName +'"]:checked').length;

    /*  Event   : Check 2nd [child] checkbox
        Action  : Check [package]
    -------------------------------------------------- */
    if(checked && type=='child' && checkedChildQty == 2) {
      $('.js-checkbox[data-type="parent"][data-group="' + groupName +'"]').prop('checked', true);
      $('.js-checkbox[data-type="child"][data-group="' + groupName +'"]')
        .next('label').addClass('disable');
    }
    /*  Event   : Uncheck 2nd [child] checkbox
        Action  : Uncheck [parent]
    -------------------------------------------------- */
    if(checked == false && type=='child' && checkedChildQty == 1) {
      $('.js-checkbox[data-type="parent"][data-group="' + groupName +'"]').prop('checked', false);
      $('.js-checkbox[data-type="child"][data-group="' + groupName +'"]')
        .next('label').removeClass('disable');
    }

    /*  Event   : Check [parent] checkbox
        Action  : Uncheck [child] checkbox
    -------------------------------------------------- */
    if(checked && type=='parent') {
      $('.js-checkbox[data-type="child"][data-group="' + groupName +'"]')
        .prop('checked', true)
        .next('label').addClass('disable');
    }
    /*  Event   : Uncheck [parent] checkbox
        Action  : Uncheck both [child] checkbox
    -------------------------------------------------- */
    if(checked == false && type=='parent') {
      $('.js-checkbox[data-type="child"][data-group="' + groupName +'"]')
        .prop('checked', false)
        .next('label').removeClass('disable');

    }
  });
});



