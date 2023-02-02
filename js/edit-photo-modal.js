import { clearFilter } from './add-effects.js';
import { isEscEvent, isEnterEvent } from './util.js';
import { uploadPhotoForm } from './new-photo-form.js';
import { uploadFileField } from './upload-photo.js';

const DEFAULT_ZOOM_VALUE = 100;
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const body = document.querySelector('body');
const uploadModalOverlay = document.querySelector('.img-upload__overlay');
const uploadModalCloseButton = document.querySelector('#upload-cancel');
const zoomValue = document.querySelector('.scale__control--value');
const preview = document.querySelector('.img-upload__preview img');
const effectsPreview = document.querySelectorAll('.effects__preview');

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

  const file = uploadFileField.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((item) => fileName.endsWith(item));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      preview.src = reader.result;
      effectsPreview.forEach((item) => {
        item.style.backgroundImage = `url("${reader.result}")`;
      });
    });

    reader.readAsDataURL(file);
  }
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
