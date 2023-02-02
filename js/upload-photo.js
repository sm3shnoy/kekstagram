import { uploadModalOpen } from './edit-photo-modal.js';

export const uploadFileField = document.querySelector('#upload-file');

uploadFileField.addEventListener('change', uploadModalOpen);
