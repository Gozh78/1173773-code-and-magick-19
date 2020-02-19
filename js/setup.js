'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)',
  'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var FIRST_ARRAY_ELEMENT_NUMBER = 0;
var SECOND_ARRAY_ELEMENT_NUMBER = 1;
var coatCounter = SECOND_ARRAY_ELEMENT_NUMBER;
var eyesCounter = SECOND_ARRAY_ELEMENT_NUMBER;
var fireballCounter = SECOND_ARRAY_ELEMENT_NUMBER;

var userDialog = document.querySelector('.setup');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');

var createRandomSkin = function (arr1, arr2) {
  var randomSkin;
  randomSkin = arr1[Math.floor(Math.random() * arr1.length)];
  if (arr2) {
    randomSkin = arr1[Math.floor(Math.random() * arr1.length)] + ' ' + arr2[Math.floor(Math.random() * arr2.length)];
  }
  return randomSkin;
};

var wizards = [
  {
    name: createRandomSkin(WIZARD_NAMES, WIZARD_SECOND_NAMES),
    coatColor: createRandomSkin(WIZARD_COAT_COLORS),
    eyesColor: createRandomSkin(WIZARD_EYES_COLORS)
  },
  {
    name: createRandomSkin(WIZARD_NAMES, WIZARD_SECOND_NAMES),
    coatColor: createRandomSkin(WIZARD_COAT_COLORS),
    eyesColor: createRandomSkin(WIZARD_EYES_COLORS)
  },
  {
    name: createRandomSkin(WIZARD_NAMES, WIZARD_SECOND_NAMES),
    coatColor: createRandomSkin(WIZARD_COAT_COLORS),
    eyesColor: createRandomSkin(WIZARD_EYES_COLORS)
  },
  {
    name: createRandomSkin(WIZARD_NAMES, WIZARD_SECOND_NAMES),
    coatColor: createRandomSkin(WIZARD_COAT_COLORS),
    eyesColor: createRandomSkin(WIZARD_EYES_COLORS)
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');


// События

// Нажатие на элемент .setup-open удаляет класс hidden
// у блока setup. Нажатие на элемент .setup-close, расположенный
// внутри блока setup возвращает ему класс hidden.
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

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

userNameInput.addEventListener('keydown', function (evt) {
  if (evt.key === ESC_KEY) {
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
  // counter += 1;
  /*
  if (counter === array.length) {
    counter = FIRST_ARRAY_ELEMENT_NUMBER;
    // ...
  }*/
  // не знаю, как можно вставить в эту фунцию условие, чтобы при его выполнении функция выполнялась так, чтобы возвращала значение counter
};

setupWizardCoatColor.addEventListener('click', function () {
  /* setupWizardCoatColor.style.fill = WIZARD_COAT_COLORS[coatCounter];
  setupCoatInput.value = WIZARD_COAT_COLORS[coatCounter];
  coatCounter += 1;

  if (coatCounter === WIZARD_COAT_COLORS.length) {
    coatCounter = FIRST_ARRAY_ELEMENT_NUMBER;
  }*/

  onWizardElementClick(setupWizardCoatColor, WIZARD_COAT_COLORS, setupCoatInput, coatCounter);
  coatCounter += 1;
  if (coatCounter === WIZARD_COAT_COLORS.length) {
    coatCounter = FIRST_ARRAY_ELEMENT_NUMBER;
  }
});


setupWizardEyesColor.addEventListener('click', function () {
  // setupWizardEyesColor.style.fill = WIZARD_EYES_COLORS[eyesCounter];
  // setupEyesInput.value = WIZARD_EYES_COLORS[eyesCounter];
  // eyesCounter += 1;
  onWizardElementClick(setupWizardEyesColor, WIZARD_EYES_COLORS, setupEyesInput, eyesCounter);
  eyesCounter += 1;
  if (eyesCounter === WIZARD_EYES_COLORS.length) {
    eyesCounter = FIRST_ARRAY_ELEMENT_NUMBER;
  }
});

setupFireballColor.addEventListener('click', function () {
  // setupFireballColor.style.backgroundColor = WIZARD_FIREBALL_COLORS[fireballCounter];
  // setupFireballInput.value = WIZARD_FIREBALL_COLORS[fireballCounter];
  // fireballCounter += 1;
  setupFireballColor.style.backgroundColor = WIZARD_FIREBALL_COLORS[fireballCounter];
  onWizardElementClick(setupFireballColor, WIZARD_FIREBALL_COLORS, setupFireballInput, fireballCounter);
  fireballCounter += 1;
  if (fireballCounter === WIZARD_FIREBALL_COLORS.length) {
    fireballCounter = FIRST_ARRAY_ELEMENT_NUMBER;
  }
});
