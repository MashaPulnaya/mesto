import { Card } from './card.js';
import { FormValidation } from './formValidator.js';

const editPopup = document.querySelector('.popup_edit_form');
const openEditPopupButton = document.querySelector('.profile__adit-button');
const closeEditPopupButton = editPopup.querySelector('.popup__close-button');
const profileTitle = document.querySelector('.profile__title');
const nameInput = document.querySelector('.popup__input_type_name');
const profileSubtitle = document.querySelector('.profile__subtitle');
const professionInput = document.querySelector('.popup__input_type_job');
const editForm = editPopup.querySelector('.popup__form');

openEditPopupButton.addEventListener('click', function () {
    openPopup(editPopup);
    nameInput.value = profileTitle.textContent;
    professionInput.value = profileSubtitle.textContent;
});

closeEditPopupButton.addEventListener('click', function () {
    closePopup(editPopup);
});

editForm.addEventListener('submit', function (event) {
    event.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = professionInput.value;
    closePopup(editPopup);
});

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
}

//// второй попап

const openPopupCardButton = document.querySelector('.profile__add-button');
const closePopupCardButton = document.querySelector('.popup__close-button_card_image');
const addPopup = document.querySelector('.popup_card_image');
const cardTitle = document.querySelector('.card__title');
const titleInput = document.querySelector('.popup__input_type_title');
const imageInput = document.querySelector('.popup__input_type_image');
const addForm = document.querySelector('.popup__form_type_card');
const popupButton = addForm.querySelector('.popup__button');


openPopupCardButton.addEventListener('click', function () {
    openPopup(addPopup);
});

closePopupCardButton.addEventListener('click', function () {
    closePopup(addPopup);
});

///создание карточек

const template = document.querySelector('.card-template');
const templateContent = template.content;
const card = templateContent.querySelector('.card');



addForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData);
    
    const valueСard = values['name-card'];
    const valueImage = values['name-image'];
    
    const card = new Card (valueСard, valueImage, '.elements');
    const cardElement = card.generateCard();
    document.querySelector('.elements').prepend(cardElement);
    
    form.reset();
    closePopup(addPopup);
    popupButton.classList.add('popup__button_inactive');
    popupButton.setAttribute('disabled', 'disabled');
    });
    

const popupImage = document.querySelector('.popup-image');
const popupImageCloseButton = document.querySelector('.popup-image__close-button');

popupImageCloseButton.addEventListener('click', function () {
    closePopup(popupImage);
});

function closeByEscape(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    };
  };

  const allPopups = document.querySelectorAll('.popup');
  
  allPopups.forEach((popup) => {
      popup.addEventListener('click', function (evt) {
          if (evt.target === popup || !popup.contains(evt.target)) {
              closePopup(popup);
          }
      });
  });











