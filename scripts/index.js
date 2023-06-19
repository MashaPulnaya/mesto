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
const addPopup = document.querySelector('.popup_card_image');
const cardTitle = document.querySelector('.card__title');
const titleInput = document.querySelector('.popup__input_type_title');
const imageInput = document.querySelector('.popup__input_type_image');
const addForm = document.querySelector('.popup__form_type_card');
const popupImagePhoto = document.querySelector('.popup-image__photo');
const popupImageTitle = document.querySelector('.popup-image__title');
const popupButton = addForm.querySelector('.popup__button');


openPopupCardButton.addEventListener('click', function () {
    openPopup(addPopup);
});

closePopupCardButton.addEventListener('click', function () {
    closePopup(addPopup);
});


const template = document.querySelector('.card-template');
const templateContent = template.content;
const card = templateContent.querySelector('.card');

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

const elements = document.querySelector('.elements');

initialCards.forEach(function (item) {
    const newCard = createCard(item.name, item.link);
    elements.prepend(newCard);
});

function createCard(name, link) {
    const newCard = card.cloneNode(true);

    const text = newCard.querySelector('.card__title');
    const image = newCard.querySelector('.card__image');
    image.alt = name;
    text.textContent = name;
    image.src = link;

    const deleteButton = newCard.querySelector('.card__del');
    deleteButton.addEventListener('click', function (event) {
        elements.removeChild(newCard);
    });

    const likeButton = newCard.querySelector('.card__group');
    likeButton.addEventListener('click', function (evt) {
        evt.target.classList.toggle('card__group_active');
    });

    image.addEventListener('click', function () {
        openPopup(popupImage);
        popupImagePhoto.alt = name;
        popupImagePhoto.src = link;
        popupImageTitle.textContent = name;

    });

    return newCard;
};


addForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData);

    const valueСard = values['name-card'];
    const valueImage = values['name-image'];

    const newCard = createCard(valueСard, valueImage);
    elements.prepend(newCard);

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











