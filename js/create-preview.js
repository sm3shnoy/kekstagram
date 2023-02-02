import { onSmallPhotoClick } from './big-photo.js';

const pictures = document.querySelector('.pictures');
const miniatureTemplate = document.querySelector('#picture').content;
const miniatureSimilarItem = miniatureTemplate.querySelector('.picture');

const createPreview = (photos) => {
  const similarPicturesFragment = document.createDocumentFragment();

  photos.forEach((item) => {
    const miniature = miniatureSimilarItem.cloneNode(true);

    miniature.querySelector('.picture__img').src = item.url;
    miniature.querySelector('.picture__comments').textContent =
      item.comments.length;
    miniature.querySelector('.picture__likes').textContent = item.likes;
    miniature.addEventListener('click', (evt) => {
      evt.preventDefault();
      onSmallPhotoClick(item);
    });

    similarPicturesFragment.append(miniature);
  });

  pictures.append(similarPicturesFragment);
};

export { createPreview };
