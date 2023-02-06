import { body } from './edit-photo-modal.js';
import { isEscEvent } from './util.js';

const addFormStatusModal = (type) => {
  const modal = document
    .querySelector(`#${type}`)
    .content.querySelector(`.${type}`)
    .cloneNode(true);
  const modalContainer = modal.querySelector(`.${type}__inner`);

  const escFormStatusModalClose = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      formStatusModalClose();
    }
  };

  document.addEventListener('click', (evt) => {
    if (!modalContainer.contains(evt.target)) {
      formStatusModalClose();
    }
  });

  const formStatusModalClose = () => {
    modal.style.display = 'none';
    document.removeEventListener('keydown', escFormStatusModalClose);
  };

  body.append(modal);
  const closeButton = modal.querySelector(`.${type}__button`);
  modal.style.display = 'flex';

  closeButton.addEventListener('click', () => {
    formStatusModalClose();
  });

  document.addEventListener('keydown', escFormStatusModalClose);
};

export { addFormStatusModal };
