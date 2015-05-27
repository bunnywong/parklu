(function($) {
  $.fn.starRange = function() {
    function _render(self) {
      $(self).nextAll().remove();
      for(var i=$(self).attr('max'); i>$(self).val(); i--) {
        $(self).after(
          $('<img>').addClass('star').attr('src', 'images/star_off.png').data('value', i).mouseover(function() {
            if(!$(self).prop('readonly')) {
              $(self).val($(this).data('value'))
              _render(self);
            }
          })
        );
      }
      for(var i=$(self).val(); i>$(self).attr('min'); i--) {
        $(self).after(
          $('<img>').addClass('star').attr('src', 'images/star_on.png').data('value', i).mouseover(function() {
            if(!$(self).prop('readonly')) {
              $(self).val($(this).data('value'))
              _render(self);
            }
          })
        );
      }
    }
    return this.each(function(index, element) {
      $(this).hide();
      _render(this);
    });
  };
}(jQuery));
