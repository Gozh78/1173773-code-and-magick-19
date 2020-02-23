'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  window.util = {
    ESC_KEY: ESC_KEY,
    ENTER_KEY: ENTER_KEY,
    isEscEvent: function (evt, action) {
      if (evt.key === ESC_KEY) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.key === ENTER_KEY) {
        action();
      }
    }
  };
})();
