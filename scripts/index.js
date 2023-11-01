// @todo: Темплейт карточки
const cardTemplate = document.getElementById('card-template');

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки

function createCard(cardData, deleteCardFunction) {
  const card = cardTemplate.content.cloneNode(true);

  card.querySelector('.card__image').src = cardData.link;
  card.querySelector('.card__image').alt = cardData.name;
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