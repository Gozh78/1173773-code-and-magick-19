'use strict';

(function () {
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)',
    'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setup = document.querySelector('.setup');
  var setupPlayer = setup.querySelector('.setup-player');
  var setupWizardCoatColor = setupPlayer.querySelector('.wizard-coat');
  var setupWizardEyesColor = setupPlayer.querySelector('.wizard-eyes');
  var setupFireballColor = setupPlayer.querySelector('.setup-fireball-wrap');
  var setupCoatInput = setupPlayer.querySelector('input:first-of-type');
  var setupEyesInput = setupPlayer.querySelector('input:last-of-type');
  var setupFireballInput = setupFireballColor.querySelector('input');

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  var getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };

  setupWizardCoatColor.addEventListener('click', function () {
    var newColor = getRandomElement(WIZARD_COAT_COLORS);
    setupWizardCoatColor.style.fill = newColor;
    setupCoatInput.value = newColor;
    wizard.onCoatChange(newColor);
  });

  setupWizardEyesColor.addEventListener('click', function () {
    var newColor = getRandomElement(WIZARD_EYES_COLORS);
    setupWizardEyesColor.style.fill = newColor;
    setupEyesInput.value = newColor;
    wizard.onEyesChange(newColor);
  });

  setupFireballColor.addEventListener('click', function () {
    var newColor = getRandomElement(WIZARD_FIREBALL_COLORS);
    setupFireballColor.style.backgroundColor = newColor;
    setupFireballInput.value = newColor;
  });

  window.wizard = wizard;
})();
