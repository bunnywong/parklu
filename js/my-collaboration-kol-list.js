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