'use strict';
// Нажатие на элемент .setup-open удаляет класс hidden
// у блока setup. Нажатие на элемент .setup-close, расположенный
// внутри блока setup возвращает ему класс hidden.

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var userNameInput = setup.querySelector('.setup-user-name');

  var popupCoordinateY = window.getComputedStyle(setup).top;
  var popupCoordinateX = window.getComputedStyle(setup).left;

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    resetPopupPosition();
  };

  var resetPopupPosition = function () {
    setup.style.top = popupCoordinateY;
    setup.style.left = popupCoordinateX;
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  userNameInput.addEventListener('keydown', function (evt) {
    if (evt.key === window.util.ESC_KEY) {
      document.removeEventListener('keydown', onPopupEscPress);
    } else {
      document.addEventListener('keydown', onPopupEscPress);
    }
  });

  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });
})();
