'use strict';
// Нажатие на элемент .setup-open удаляет класс hidden
// у блока setup. Нажатие на элемент .setup-close, расположенный
// внутри блока setup возвращает ему класс hidden.

// var setup = document.querySelector('.setup');
(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var userNameInput = setup.querySelector('.setup-user-name');
  var setupPlayer = setup.querySelector('.setup-player');
  var setupWizardCoatColor = setupPlayer.querySelector('.wizard-coat');
  var setupWizardEyesColor = setupPlayer.querySelector('.wizard-eyes');
  var setupFireballColor = setupPlayer.querySelector('.setup-fireball-wrap');
  var setupCoatInput = setupPlayer.querySelector('input:first-of-type');
  var setupEyesInput = setupPlayer.querySelector('input:last-of-type');
  var setupFireballInput = setupFireballColor.querySelector('input');
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

  var onWizardElementClick = function (element, array, input, counter) {
    element.style.fill = array[counter];
    input.value = array[counter];
  };
  /* Хотел заменить куски кода со счётчиком на функцию, но счётчик некорректно работает
  var countWizardElements = function (arrayColors) {
    window.setup.allCounter += 1;
    if (window.setup.allCounter === window.setup.arrayColors.length) {
      window.setup.allCounter = window.setup.FIRST_ARRAY_ELEMENT_NUMBER;
    }
  };
  */
  setupWizardCoatColor.addEventListener('click', function () {
    onWizardElementClick(setupWizardCoatColor, window.setup.WIZARD_COAT_COLORS, setupCoatInput, window.setup.allCounter);
    window.setup.allCounter += 1;
    if (window.setup.allCounter === window.setup.WIZARD_COAT_COLORS.length) {
      window.setup.allCounter = window.setup.FIRST_ARRAY_ELEMENT_NUMBER;
    }
    // countWizardElements(window.setup.WIZARD_COAT_COLORS);
  });

  setupWizardEyesColor.addEventListener('click', function () {
    onWizardElementClick(setupWizardEyesColor, window.setup.WIZARD_EYES_COLORS, setupEyesInput, window.setup.allCounter);
    window.setup.allCounter += 1;
    if (window.setup.allCounter === window.setup.WIZARD_EYES_COLORS.length) {
      window.setup.allCounter = window.setup.FIRST_ARRAY_ELEMENT_NUMBER;
    }
    // countWizardElements(window.setup.WIZARD_EYES_COLORS);
  });

  setupFireballColor.addEventListener('click', function () {
    setupFireballColor.style.backgroundColor = window.setup.WIZARD_FIREBALL_COLORS[window.setup.allCounter];
    onWizardElementClick(setupFireballColor, window.setup.WIZARD_FIREBALL_COLORS, setupFireballInput, window.setup.allCounter);
    window.setup.allCounter += 1;
    if (window.setup.allCounter === window.setup.WIZARD_FIREBALL_COLORS.length) {
      window.setup.allCounter = window.setup.FIRST_ARRAY_ELEMENT_NUMBER;
    }
    // countWizardElements(window.setup.WIZARD_FIREBALL_COLORS);
  });


  /*
  setupWizardCoatColor.addEventListener('click', function () {
    onWizardElementClick(setupWizardCoatColor, WIZARD_COAT_COLORS, setupCoatInput, coatCounter);
    coatCounter += 1;
    if (coatCounter === WIZARD_COAT_COLORS.length) {
      coatCounter = FIRST_ARRAY_ELEMENT_NUMBER;
    }
  });

  setupWizardEyesColor.addEventListener('click', function () {

    onWizardElementClick(setupWizardEyesColor, WIZARD_EYES_COLORS, setupEyesInput, eyesCounter);
    eyesCounter += 1;
    if (eyesCounter === WIZARD_EYES_COLORS.length) {
      eyesCounter = FIRST_ARRAY_ELEMENT_NUMBER;
    }
  });

  setupFireballColor.addEventListener('click', function () {

    setupFireballColor.style.backgroundColor = WIZARD_FIREBALL_COLORS[fireballCounter];
    onWizardElementClick(setupFireballColor, WIZARD_FIREBALL_COLORS, setupFireballInput, fireballCounter);
    fireballCounter += 1;
    if (fireballCounter === WIZARD_FIREBALL_COLORS.length) {
      fireballCounter = FIRST_ARRAY_ELEMENT_NUMBER;
    }
  });
  */
})();
