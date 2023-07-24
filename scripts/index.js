import { initialCards } from './InitialCards.js';
import { Card } from './Card.js';
import { _handleOpenPopup, _handleClosePopup } from './utils.js';
import { FormValidation, formSelectors } from './FormValidator.js';


const editPopup = document.querySelector('.popup_edit_form');
const openEditPopupButton = document.querySelector('.profile__adit-button');
const closeEditPopupButton = editPopup.querySelector('.popup__close-button');
const profileTitle = document.querySelector('.profile__title');
const nameInput = document.querySelector('.popup__input_type_name');
const profileSubtitle = document.querySelector('.profile__subtitle');
const professionInput = document.querySelector('.popup__input_type_job');
const editForm = editPopup.querySelector('.popup__form');
const popupImage = document.querySelector('.popup-image');
const popupImageTitle = popupImage.querySelector('.popup-image__title');
const popupImageImage = popupImage.querySelector('.popup-image__photo');
const addPopup = document.querySelector('.popup_card_image');

export const addPopupValid = new FormValidation(formSelectors, addPopup);
addPopupValid.enableValidation();

export const editPopupValid = new FormValidation(formSelectors, editPopup);
editPopupValid.enableValidation();

openEditPopupButton.addEventListener('click', function () {
    openPopup(editPopup);
    nameInput.value = profileTitle.textContent;
    professionInput.value = profileSubtitle.textContent;
    editPopupValid.resetForm();
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

function openPopup(popup) {
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
const cardTitle = document.querySelector('.card__title');
const titleInput = document.querySelector('.popup__input_type_title');
const imageInput = document.querySelector('.popup__input_type_image');
const addForm = document.querySelector('.popup__form_type_card');
const popupButton = addForm.querySelector('.popup__button');


openPopupCardButton.addEventListener('click', function () {
    openPopup(addPopup);
    addPopupValid.resetForm();
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

    const nameCard = document.querySelector('.popup__input_type_title');
    const nameImage = document.querySelector('.popup__input_type_image');

    const newCardData = {
        name: nameCard.value,
        link: nameImage.value
    }

    const card = new Card(newCardData);
    const elements = document.querySelector('.elements');
    const cardElement = card.generateCard();
    elements.prepend(cardElement);

    form.reset();
    closePopup(addPopup);
    popupButton.classList.add('popup__button_inactive');
    popupButton.setAttribute('disabled', 'disabled');
});

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

initialCards.forEach((item) => {
    const card = new Card(item, '.card-template');
    const cardElement = card.generateCard();

    const container = document.querySelector('.elements');
    container.append(cardElement);

});











