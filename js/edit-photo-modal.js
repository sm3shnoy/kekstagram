import { clearFilter } from './add-effects.js';
import { isEscEvent, isEnterEvent } from './util.js';
import { uploadPhotoForm } from './new-photo-form.js';

const DEFAULT_ZOOM_VALUE = 100;

const body = document.querySelector('body');
const uploadFileField = document.querySelector('#upload-file');
const uploadModalOverlay = document.querySelector('.img-upload__overlay');
const uploadModalCloseButton = document.querySelector('#upload-cancel');
const zoomValue = document.querySelector('.scale__control--value');
const preview = document.querySelector('.img-upload__preview img');

export const onUploadModalEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    uploadModalClose();
  }
};

const resetSettings = () => {
  zoomValue.value = DEFAULT_ZOOM_VALUE + '%';
  preview.style.transform = 'scale(1)';
  preview.className = '';
  clearFilter();
};

export const uploadModalOpen = () => {
  resetSettings();
  uploadModalOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onUploadModalEscKeydown);
  uploadModalCloseButton.addEventListener('click', uploadModalClose);
};

export const uploadModalClose = () => {
  resetSettings();
  uploadPhotoForm.reset();
  uploadFileField.value = '';
  uploadModalOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
};

uploadModalCloseButton.addEventListener('keydown', (evt) => {
  if (isEnterEvent(evt)) {
    uploadModalClose();
  }
});

export { preview, resetSettings, body };
