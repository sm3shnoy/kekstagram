import { sendData } from './api.js';
import { uploadModalClose } from './edit-photo-modal.js';
import { addFormStatusModal } from './status-modal.js';
import { isEscEvent } from './util.js';

const MAX_HASHTAG_LENGTH = 20;
const MAX_HASHTAG_COUNT = 5;
const uploadPhotoForm = document.querySelector('.img-upload__form');
const hashTagField = document.querySelector('.text__hashtags');
const description = document.querySelector('.text__description');

hashTagField.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    evt.stopPropagation();
  }
});

hashTagField.addEventListener('input', () => {
  hashTagField.setCustomValidity('');
  let hashtagText = hashTagField.value.toLowerCase().trim();

  if (!hashtagText) {
    return;
  }

  let hashtagTextArray = hashtagText.split(/\s+/);

  if (hashtagTextArray.length > MAX_HASHTAG_COUNT) {
    hashTagField.setCustomValidity(
      `Максимальное количество хэштегов - ${MAX_HASHTAG_COUNT}`
    );
  }

  if (hashtagTextArray.length > MAX_HASHTAG_COUNT) {
    hashTagField.setCustomValidity(
      `Максимальное количество хэштегов - ${MAX_HASHTAG_COUNT}`
    );
  }

  hashtagTextArray.some((item, i, array) => {
    if (item[0] !== '#') {
      hashTagField.setCustomValidity('Хэштег должен начинаться с символа #');
    } else if (item === '#') {
      hashTagField.setCustomValidity(
        'Хэштег не может состоять только из символа решетки!'
      );
    } else if (/[^a-zA-Z0-9]/.test(item.substring(1))) {
      hashTagField.setCustomValidity(
        'Хэштег должен состоять только из букв и цифр!'
      );
    } else if (array.indexOf(item) !== i) {
      hashTagField.setCustomValidity('Хэштеги не должны повторяться!');
    } else if (item.length > MAX_HASHTAG_LENGTH) {
      hashTagField.setCustomValidity(
        `Длина одного хэштега не должна превышать ${MAX_HASHTAG_LENGTH} символов. Удалите еще ${
          item.length - MAX_HASHTAG_LENGTH
        } символов`
      );
    }
  });

  hashTagField.reportValidity();
});

description.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    evt.stopPropagation();
  }
});

const addNewPhoto = (onSuccess) => {
  uploadPhotoForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      () => {
        onSuccess();
        addFormStatusModal('success');
      },
      () => {
        addFormStatusModal('error');
        uploadModalClose();
      },
      new FormData(evt.target)
    );
  });
};

export { addNewPhoto, uploadPhotoForm };
