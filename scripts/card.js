const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popupElement = document.querySelector('.popup-image');
const popupImage = document.querySelector('.popup-image__photo');
const popupCloseButton = document.querySelector('.popup-image__close-button');

export class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;

  }

  _getTemplate() {
    const cardElement = document
      .querySelector('.card-template')
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  _handleOpenPopup() {
    popupImage.src = this._link;
    popupElement.classList.add('popup_opened');
  }

  _handleClosePopup() {
    popupImage.src = '';
    popupElement.classList.remove('popup_opened');
  }

  _handleDeleteClick() {
    this._element.remove();
  }

  _handleLikeButton() {
    this._element.querySelector('.card__group').classList.toggle('card__group_active');
  }

  _setEventListeners() {

    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handleOpenPopup();
    });


    popupCloseButton.addEventListener('click', () => {
      this._handleClosePopup();
    });

    this._element.querySelector('.card__del').addEventListener('click', () => {
      this._handleDeleteClick();
    });

    this._element.querySelector('.card__group').addEventListener('click', () => {
      this._handleLikeButton();
    });

  }


  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.card__title').textContent = this._name;
    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__image').setAttribute('alt', this._name);
    return this._element;
  }

}

initialCards.forEach((item) => {
  const card = new Card(item.name, item.link);
  const cardElement = card.generateCard();

  document.querySelector('.elements').append(cardElement);
});


