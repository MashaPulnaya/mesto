const enableValidation = ({ formPopup, inputPopup, submitButton, inactiveButton, inputError, errorActive }) => {
    const formList = Array.from(document.querySelectorAll(`.${formPopup}`));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement, inputPopup, submitButton, inactiveButton, inputError, errorActive);
    });
};

const showInputError = (formElement, inputElement, errorMessage, inputError, errorActive) => {
    const formError = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(`${inputError}`);
    formError.textContent = errorMessage;
    formError.classList.add(`${errorActive}`);
};

const hideInputError = (formElement, inputElement, inputError, errorActive) => {
    const formError = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(`${inputError}`);
    formError.classList.remove(`${errorActive}`);
    formError.textContent = '';
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const toggleButtonState = (inputList, buttonElement, inactiveButton) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(`${inactiveButton}`);
        buttonElement.setAttribute('disabled', 'disabled');
    } else {
        buttonElement.classList.remove(`${inactiveButton}`);
        buttonElement.removeAttribute('disabled', 'disabled');
    }
};

const checkInputValidity = (formElement, inputElement, inputError, errorActive) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, inputError, errorActive);
    } else {
        hideInputError(formElement, inputElement, inputError, errorActive);
    };
};


const setEventListeners = (formElement, inputPopup, submitButton, inactiveButton, inputError, errorActive) => {
    const inputList = Array.from(formElement.querySelectorAll(`.${inputPopup}`));
    const buttonElement = formElement.querySelector(`.${submitButton}`);
    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, inputError, errorActive);
            toggleButtonState(inputList, buttonElement, inactiveButton);
        });
    });
};

enableValidation({
    formPopup: 'popup__form',
    inputPopup: 'popup__input',
    submitButton: 'popup__button',
    inactiveButton: 'popup__button_inactive',
    inputError: 'popup__input_type_error',
    errorActive: 'popup__input-error_active'
});