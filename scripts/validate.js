const classNames = {
    formPopup: 'popup__form',
    inputPopup: 'popup__input',
    submitButton: 'popup__button',
    inactiveButton: 'popup__button_inactive',
    inputError: 'popup__input_type_error',
    errorActive: 'popup__input-error_active'
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(`.${classNames.formPopup}`));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement);
    });
};

const showInputError = (formElement, inputElement, errorMessage) => {
    const formError = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(classNames.inputError);
    formError.textContent = errorMessage;
    formError.classList.add(classNames.errorActive);
};

const hideInputError = (formElement, inputElement) => {
    const formError = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(classNames.inputError);
    formError.classList.remove(classNames.errorActive);
    formError.textContent = '';
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(classNames.inactiveButton);
    } else {
        buttonElement.classList.remove(classNames.inactiveButton);
    }
};

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    };
};


const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(`.${classNames.inputPopup}`));
    const buttonElement = formElement.querySelector(`.${classNames.submitButton}`);
    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

enableValidation();