
export function _handleOpenPopup(popupImagePhoto, link, popupImage) {
    popupImagePhoto.src = link;
    popupImage.classList.add('popup_opened');
    document.removeEventListener('keydown', () => _closeByEscape);
}


export const _closeByEscape = (event) => {
    if (event.key === 'Escape') {
        _handleClosePopup(popupImagePhoto, popupImage);
    }
}


export function _handleClosePopup(popupImagePhoto, popupImage) {
    popupImagePhoto.src = '';
    popupImage.classList.remove('popup_opened');
    document.removeEventListener('keydown', _closeByEscape);
}
