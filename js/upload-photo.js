import { uploadModalOpen } from './edit-photo-modal.js';

const uploadFileField = document.querySelector('#upload-file');

uploadFileField.addEventListener('change', uploadModalOpen);
