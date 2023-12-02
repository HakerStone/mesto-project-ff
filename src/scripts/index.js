import '../pages/index.css';
import { addCards, addNewCard } from './components/card.js';
import { openPopup, closePopup, openPopupByButton } from './components/modal.js';

addCards();

const popupProfile = document.querySelector('.popup_type_edit');
export const popupAddNewCard = document.querySelector('.popup_type_new-card');
export const popupImage = document.querySelector('.popup_type_image');

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const popupImageImage = popupImage.querySelector('.popup__image');
const popupImageCaption = popupImage.querySelector('.popup__caption');

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

//открытие изображения
export function openImagePopup(link, alt) {
  popupImageImage.src = link;
  popupImageImage.alt = alt;
  popupImageCaption.textContent = alt;
  openPopup(popupImage);
}