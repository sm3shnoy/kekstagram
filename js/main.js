import { createPreview } from './create-preview.js';
import './upload-photo.js';
import './zoom-photo.js';
import './add-effects.js';
import './new-photo-form.js';
import { getPreviews } from './api.js';
import { uploadModalClose, resetSettings } from './edit-photo-modal.js';
import { addNewPhoto } from './new-photo-form.js';

resetSettings();

getPreviews((photos) => {
  createPreview(photos);
});

addNewPhoto(uploadModalClose);
