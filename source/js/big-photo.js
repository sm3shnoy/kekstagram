import { isEnterEvent, isEscEvent } from './util.js';
import {
  COMMENTS_LOAD_STEP,
  state,
  toggleLoader,
  renderComments,
} from './render-comments.js';

const body = document.querySelector('body');
const bigPhoto = document.querySelector('.big-picture');
const closeBigPhotoButton = bigPhoto.querySelector('.big-picture__cancel');

const onBigPhotoEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

closeBigPhotoButton.addEventListener('keydown', (evt) => {
  if (isEnterEvent(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
});

const closeBigPhoto = () => {
  bigPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onBigPhotoEscKeydown);
};

const onSmallPhotoClick = (photo) => {
  const { url, description, likes, comments } = photo;
  const img = bigPhoto.querySelector('.big-picture__img img');

  // sync state
  state.commentsCount = COMMENTS_LOAD_STEP;
  state.commentsLoaded = [];
  state.comments = comments;

  img.src = url;
  img.alt = description;
  bigPhoto.querySelector('.likes-count').textContent = likes;
  bigPhoto.querySelector('.social__caption').textContent = description;

  closeBigPhotoButton.addEventListener('click', closeBigPhoto);
  document.addEventListener('keydown', onBigPhotoEscKeydown);
  body.classList.add('modal-open');
  renderComments();
  toggleLoader();
  bigPhoto.classList.remove('hidden');
};

export { body, onSmallPhotoClick };
