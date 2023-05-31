const openPopupButton = document.querySelector('.profile__adit-button');
const closePopupButton = document.querySelector('.popup__close-button');
const editPopup = document.querySelector('.popup');
const profileTitle = document.querySelector('.profile__title');
const nameInput = document.querySelector('.popup__input_type_name');
const profileSubtitle = document.querySelector('.profile__subtitle');
const professionInput = document.querySelector('.popup__input_type_job');
const editForm = document.querySelector('.popup__form');

openPopupButton.addEventListener('click', function () {
    openPopup(editPopup);
});

closePopupButton.addEventListener('click', function () {
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
    nameInput.value = profileTitle.textContent;
    professionInput.value = profileSubtitle.textContent;
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

//// второй попап

const openPopupCardButton = document.querySelector('.profile__add-button');
const closePopupCardButton = document.querySelector('.popup__close-button_card_image');
const addPopup = document.querySelector('.popup_card_image');
const cardTitle = document.querySelector('.card__title');
const titleInput = document.querySelector('.popup__input_type_title');
const cardImage = document.querySelector('.card__image');
const imageInput = document.querySelector('.popup__input_type_image');
const addForm = document.querySelector('.popup__form_type_card');


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

initialCards.forEach(function (item) {
    const newCard = createCard(item.name, item.link);
    template.prepend(newCard);
});

function createCard(name, link) {
    const newCard = card.cloneNode(true);

    const text = newCard.querySelector('.card__title');
    const image = newCard.querySelector('.card__image');
    text.textContent = name;
    image.src = link;

    const deleteButtom = newCard.querySelector('.card__del');
    deleteButtom.addEventListener('click', function(event){
        template.removeChild(newCard);
    }); 

    const likeButtom = newCard.querySelector('.card__group');
    likeButtom.addEventListener('click', function (evt) {
        evt.target.classList.toggle('card__group_active');
    }); 

    image.addEventListener('click', function () {
        openPopup(popupImage);
        text.textContent = name;
    image.src = link;
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
    template.prepend(newCard);

    form.reset();
    closePopup(addPopup);
});

////открытие фото

const popupImage = document.querySelector('.popup-image');
const popupImagePhoto = document.querySelector('.popup-image__photo');
const popupImageCloseButton = document.querySelector('.popup-image__close-button');
const popupImageForm = document.querySelector('.popup-image__form');



popupImageCloseButton.addEventListener('click', function () {
    closePopup(popupImage);
});

function openPopup(popup) {
    popup.classList.add('popup-image_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup-image_opened');
}


