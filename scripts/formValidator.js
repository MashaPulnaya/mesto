export const formSelectors = {
    formSelector: '.popup__form',
    inputPopup: '.popup__input',
    submitButton: '.popup__button',
    inactiveButton: '.popup__button_inactive',
    inputError: 'popup__input_type_error',
    errorActive: 'popup__input-error_active'
};

export class FormValidation {
    constructor(formSelectors, formElement) {
        this._formSelectors = formSelectors;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._formSelectors.inputPopup));
        this._button = this._formElement.querySelector(this._formSelectors.submitButton);
    }

    enableValidation() {
        this._formElement.addEventListener('submit', (evt) =>
            evt.preventDefault());
        this._setEventListeners();
    }

    disableButton() {
        this._button.setAttribute('disabled', 'true');
        this._button.classList.add('popup__button_inactive');
    }

    resetForm() {
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
        });
        this._toggleButtonState();
    }

    _showInputError(inputElement, errorMessage) {
        const formError = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._formSelectors.inputError);
        formError.classList.add(this._formSelectors.errorActive);
        formError.textContent = errorMessage;
    }

    _hideInputError = (inputElement) => {
        const formError = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._formSelectors.inputError);
        formError.classList.remove(this._formSelectors.errorActive);
        formError.textContent = '';
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _setEventListeners() {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    }

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._button.classList.add('popup__button_inactive');
            this._button.setAttribute('disabled', 'true');
        } else {
            this._button.classList.remove('popup__button_inactive');
            this._button.removeAttribute('disabled');
        }
    }

}