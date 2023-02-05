import { debounce } from './debounce.js';

const COMMENTS_LOAD_STEP = 5;

const commentsList = document.querySelector('.social__comments');
const commentsItem = commentsList.querySelector('.social__comment');
const commentCountElement = document.querySelector('.social__comment-count');
const commentLoader = document.querySelector('.comments-loader');
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

moreCommentsButton.addEventListener(
  'click',
  debounce(() => {
    renderComments();
    toggleLoader();
  }, 500)
);

export { COMMENTS_LOAD_STEP, state, toggleLoader, renderComments };
