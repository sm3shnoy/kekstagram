import { isEnterEvent, isEscEvent } from './util.js';

const body = document.querySelector('body');
const bigPhoto = document.querySelector('.big-picture');
const closeBigPhotoButton = bigPhoto.querySelector('.big-picture__cancel');

// временно
bigPhoto.querySelector('.social__comment-count').hidden = true;
bigPhoto.querySelector('.comments-loader').hidden = true;

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

const renderComments = (comments) => {
  const commentsWrapper = document.querySelector('.social__comments');
  const commentContent = commentsWrapper.querySelector('.social__comment');
  const commentFragment = document.createDocumentFragment();

  commentsWrapper.innerHTML = '';

  comments.map((item) => {
    const comment = commentContent.cloneNode(true);
    comment.querySelector('.social__picture').src = item.avatar;
    comment.querySelector('.social__picture').alt = item.name;
    comment.querySelector('.social__text').textContent = item.message;
    commentFragment.append(comment);
  });

  commentsWrapper.append(commentFragment);
};

export const onSmallPhotoClick = (photo) => {
  const { url, description, likes, comments } = photo;
  const img = bigPhoto.querySelector('.big-picture__img img');

  body.classList.add('modal-open');

  img.src = url;
  img.alt = description;
  bigPhoto.querySelector('.likes-count').textContent = likes;
  bigPhoto.querySelector('.comments-count').textContent = comments.length;
  bigPhoto.querySelector('.social__caption').textContent = description;

  renderComments(comments);

  closeBigPhotoButton.addEventListener('click', closeBigPhoto);
  document.addEventListener('keydown', onBigPhotoEscKeydown);

  bigPhoto.classList.remove('hidden');
};
