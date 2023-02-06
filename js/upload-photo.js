import { uploadModalOpen } from './edit-photo-modal.js';
import { preview } from './zoom-photo.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const effectsPreview = document.querySelectorAll('.effects__preview');
const uploadFileField = document.querySelector('#upload-file');

const uploadNewPhoto = () => {
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

uploadFileField.addEventListener('change', uploadModalOpen);

export { uploadFileField, uploadNewPhoto };
