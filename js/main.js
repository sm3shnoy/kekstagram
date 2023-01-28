import { createPreview } from './create-preview.js';
import './upload-photo.js';
import './zoom-photo.js';
import './add-effects.js';
import './new-photo-form.js';
import { getPreviews } from './api.js';
import { uploadModalClose, resetSettings } from './edit-photo-modal.js';
import { addNewPhoto } from './new-photo-form.js';
import {
  showDefaultPicturesClick,
  showRandomPicturesClick,
  showDiscussedPicturesClick,
} from './filters.js';
import { shaffle, compareCommentLength, clearPicturesList } from './util.js';
import { debounce } from './debounce.js';

resetSettings();

getPreviews((photos) => {
  createPreview(photos);
  showDefaultPicturesClick(
    debounce(() => {
      clearPicturesList();
      createPreview(photos);
    }, 500)
  );
  showRandomPicturesClick(
    debounce(() => {
      clearPicturesList();
      createPreview(shaffle(photos).slice(0, 10));
    }, 500)
  );
  showDiscussedPicturesClick(
    debounce(() => {
      clearPicturesList();
      createPreview(photos.slice().sort(compareCommentLength));
    }, 500)
  );
});

addNewPhoto(uploadModalClose);
