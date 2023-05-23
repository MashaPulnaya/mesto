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
