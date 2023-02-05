import { clearFilter } from './add-effects.js';
import { isEscEvent, isEnterEvent } from './util.js';
import { uploadPhotoForm } from './new-photo-form.js';
import { uploadFileField, uploadNewPhoto } from './upload-photo.js';
import { body } from './big-photo.js';
import { Zoom, zoomValue, preview } from './zoom-photo.js';

const uploadModalOverlay = document.querySelector('.img-upload__overlay');
const uploadModalCloseButton = document.querySelector('#upload-cancel');

const onUploadModalEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    uploadModalClose();
  }
};

const uploadModalOpen = () => {
  uploadModalOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onUploadModalEscKeydown);
  uploadModalCloseButton.addEventListener('click', uploadModalClose);

  resetSettings();
  uploadNewPhoto();
};

const uploadModalClose = () => {
  uploadPhotoForm.reset();
  uploadFileField.value = '';
  uploadModalOverlay.classList.add('hidden');
  body.classList.remove('modal-open');

  resetSettings();
};

const resetSettings = () => {
  zoomValue.value = Zoom.DEFAULT_VALUE + '%';
  preview.style.transform = 'scale(1)';
  preview.className = '';

  clearFilter();
};

uploadModalCloseButton.addEventListener('keydown', (evt) => {
  if (isEnterEvent(evt)) {
    uploadModalClose();
  }
});

export { preview, body, resetSettings, uploadModalClose, uploadModalOpen };
