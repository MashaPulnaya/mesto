export class FormValidation {
    constructor(formPopup, inputPopup, submitButton, inactiveButton, inputError, errorActive) {
        this.formPopup = formPopup;
        this.inputPopup = inputPopup;
        this.submitButton = submitButton;
        this.inactiveButton = inactiveButton;
        this.inputError = inputError;
        this.errorActive = errorActive;
    }

    enableValidation() {
        const formList = Array.from(document.querySelectorAll(`.${this.formPopup}`));
        formList.forEach((formElement) => {
            formElement.addEventListener('submit', (evt) => {
                evt.preventDefault();
            });
            this._setEventListeners(formElement);
        });
    }

    _showInputError(formElement, inputElement, errorMessage) {
        const formError = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this.inputError);
        formError.textContent = errorMessage;
        formError.classList.add(this.errorActive);
    }

    _hideInputError(formElement, inputElement) {
        const formError = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this.inputError);
        formError.classList.remove(this.errorActive);
        formError.textContent = '';
    }

    hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    toggleButtonState(inputList, buttonElement) {
        if (this.hasInvalidInput(inputList)) {
            buttonElement.classList.add(this.inactiveButton);
            buttonElement.setAttribute('disabled', 'disabled');
        } else {
            buttonElement.classList.remove(this.inactiveButton);
            buttonElement.removeAttribute('disabled', 'disabled');
        }
    }

    _checkInputValidity(formElement, inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(formElement, inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(formElement, inputElement);
        }
    }

    _setEventListeners(formElement) {
        const inputList = Array.from(formElement.querySelectorAll(`.${this.inputPopup}`));
        const buttonElement = formElement.querySelector(`.${this.submitButton}`);
        this.toggleButtonState(inputList, buttonElement);

        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(formElement, inputElement);
                this.toggleButtonState(inputList, buttonElement);
            });
        });
    }
}

const formValidation = new FormValidation(
    'popup__form',
    'popup__input',
    'popup__button',
    'popup__button_inactive',
    'popup__input_type_error',
    'popup__input-error_active'
);

formValidation.enableValidation();





