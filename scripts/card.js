import { _handleOpenPopup, _handleClosePopup, _closeByEscape } from './utils.js';

const popupImage = document.querySelector('.popup-image');
const popupImagePhoto = document.querySelector('.popup-image__photo');
const popupImageCloseButton = document.querySelector('.popup-image__close-button');

export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = '.card-template';
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  _handleDeleteClick() {
    this._element.remove();
  }

  _handleLikeButton() {
    this._element.querySelector('.card__group').classList.toggle('card__group_active');
  }

  _handleOpenPopup() {
    _handleOpenPopup(popupImagePhoto, this._link, popupImage);
  }

  _handleClosePopup() {
    this._handleClosePopup(popupImagePhoto, popupImage);
  }

  _closeByEscape(event) {
    _handleClosePopup(popupImagePhoto, popupImage);
  }


  _setEventListeners() {

    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handleOpenPopup();
    });

    popupImageCloseButton.addEventListener('click', () => {
      _handleClosePopup(popupImagePhoto, popupImage);
    });

    document.addEventListener('keydown', (event) => {
      this._closeByEscape(event);
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


