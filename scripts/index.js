const openPopupButton = document.querySelector('#open-popup-button');
const closePopupButton = document.querySelector('#close-popup-button');
const editPopup = document.querySelector('#edit-popup');
const profileTitle = document.querySelector('.profile__title');
const nameInput = document.querySelector('#name-input');
const profileSubtitle = document.querySelector('.profile__subtitle');
const professionInput = document.querySelector('#profession-input');
const editForm = document.querySelector('#edit-form');

openPopupButton.addEventListener('click', function () {
    openPopup(editPopup);
});

closePopupButton.addEventListener('click', function () {
    closePopup(editPopup);
});

nameInput.value = profileTitle.textContent;
professionInput.value = profileSubtitle.textContent;

editForm.addEventListener('submit', function (event) {
    event.preventDefault();

    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = professionInput.value;

    closePopup(editPopup);
});

function openPopup(popup) {
    popup.classList.add('popup_is-opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
}
