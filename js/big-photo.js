import { isEnterEvent, isEscEvent } from './util.js';
import { debounce } from './debounce.js';

const COMMENTS_LOAD_STEP = 5;

const body = document.querySelector('body');
const bigPhoto = document.querySelector('.big-picture');
const closeBigPhotoButton = bigPhoto.querySelector('.big-picture__cancel');
const commentsList = document.querySelector('.social__comments');
const commentsItem = commentsList.querySelector('.social__comment');
const commentCountElement = bigPhoto.querySelector('.social__comment-count');
const commentLoader = bigPhoto.querySelector('.comments-loader');
const moreCommentsButton = document.querySelector('.comments-loader');

const state = {
  comments: [],
  commentsLoaded: [],
  commentsCount: COMMENTS_LOAD_STEP,
};

const toggleLoader = () => {
  if (
    state.comments.length < COMMENTS_LOAD_STEP ||
    state.commentsLoaded.length >= state.comments.length
  ) {
    commentLoader.hidden = true;
  } else {
    commentLoader.hidden = false;
  }
};

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

const renderComment = (comment) => {
  const commentSimilar = commentsItem.cloneNode(true);

  commentSimilar.querySelector('.social__picture').src = comment.avatar;
  commentSimilar.querySelector('.social__picture').alt = comment.name;
  commentSimilar.querySelector('.social__text').textContent = comment.message;

  return commentSimilar;
};

function renderComments() {
  const commentFragment = document.createDocumentFragment();

  commentsList.innerHTML = '';

  state.commentsCount =
    state.comments.length < COMMENTS_LOAD_STEP
      ? state.comments.length
      : state.commentsCount;

  commentCountElement.textContent = `${Math.min(
    state.commentsCount,
    state.comments.length
  )} из ${state.comments.length} комментариев`;

  state.commentsLoaded = state.comments.slice(0, state.commentsCount);

  state.commentsLoaded.forEach((item) => {
    commentFragment.append(renderComment(item));
  });

  state.commentsCount += COMMENTS_LOAD_STEP;

  commentsList.append(commentFragment);
}

export const onSmallPhotoClick = (photo) => {
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

moreCommentsButton.addEventListener(
  'click',
  debounce(() => {
    renderComments();
    toggleLoader();
  }, 500)
);
