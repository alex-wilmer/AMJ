'use strict';

(function () {
  $('.showOffices').click((function () {
    var overlay = $('.overlay');
    var body = $('body');
    var open = false;

    return function () {
      if (!open) {
        overlay.addClass('above opaque');
        body.css('overflow-y', 'hidden');
        open = true;
      } else {
        overlay.removeClass('opaque');
        body.css('overflow-y', 'initial');
        setTimeout(function () {
          overlay.removeClass('above');
          open = false;
        }, 300);
      }
    };
  })());
})();