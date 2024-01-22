import '../pages/index.css';
import { addCards, addNewCard, popupAddNewCard } from './components/card.js';
import { openPopup, closePopup, openPopupByButton } from './components/modal.js';
// import { enableValidation, clearValidation } from './components/validation.js';
// import { showInputError } from './components/validation.js';
// import {getInitialCards, getUser, setUserInfo, uploadCard, uploadAvatar, deleteCardFromServer } from './components/api.js';
addCards();

const popups = document.querySelectorAll('.popup');

const popupProfile = document.querySelector('.popup_type_edit');

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileForm = document.forms.editProfile;
const profileFormName = profileForm.querySelector('.popup__input_type_name');
const profileFormDescription = profileForm.querySelector('.popup__input_type_description');

function setProfileFormValues() {
  profileFormName.value = profileName.textContent;
  profileFormDescription.value = profileDescription.textContent;
}

function openProfilePopupByButton() {
  setProfileFormValues();
  openPopup(popupProfile);
}

editButton.addEventListener('click', openProfilePopupByButton);

function changeProfile(evt) {
  evt.preventDefault();
  profileName.textContent = profileFormName.value;
  profileDescription.textContent = profileFormDescription.value;
  closePopup(popupProfile);
}

profileForm.addEventListener('submit', changeProfile);
newPlace.addEventListener('submit', addNewCard);
openPopupByButton(addButton, popupAddNewCard);

// Закрыть при клике на темный фон
popups.forEach(function (popup) {
  popup.addEventListener('click', function (evt) {
    if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')){
      closePopup(popup);
    }
  });
});

