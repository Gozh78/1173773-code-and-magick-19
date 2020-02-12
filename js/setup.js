'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)',
  'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

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
