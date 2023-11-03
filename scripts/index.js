// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
//const editProfile = document.querySelector(".profile__edit-button");
//const addCard = document.querySelector(".profile__add-button");

// @todo: Функция создания карточки

function createCard(cardData, deleteCardFunction) {
  const card = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  card.querySelector('.card__title').textContent = cardData.name;
  card.querySelector('.card__delete-button').addEventListener('click', deleteCardFunction);
  return card;
}

// @todo: Функция удаления карточки
function deleteCard(event) {
  const card = event.target.closest('.card');
  card.remove();
}

// @todo: Вывести карточки на страницу
function renderCards() {
  initialCards.forEach(card => {
  placesList.append(createCard(card, deleteCard));
  });
}
document.addEventListener('DOMContentLoaded', function() {
  renderCards();
});
