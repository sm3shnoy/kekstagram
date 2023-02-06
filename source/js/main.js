import './upload-photo.js';
import { createPreview } from './create-preview.js';
import { getPreviews } from './api.js';
import { uploadModalClose } from './edit-photo-modal.js';
import { addNewPhoto } from './new-photo-form.js';
import { onFilterButtonClick } from './filters.js';

getPreviews((photos) => {
  createPreview(photos);
  onFilterButtonClick(photos);
});

addNewPhoto(uploadModalClose);
