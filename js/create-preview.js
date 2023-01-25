import { getRandomNumber, getRandomArrayElement } from './util.js';
import { createComments } from './comment.js';
import { onSmallPhotoClick } from './big-photo.js';
import {
  PHOTOS_COUNT,
  IDS_COUNT,
  LIKES_COUNT,
  PHOTO_DESCRIPTION,
} from './data.js';

const pictures = document.querySelector('.pictures');
const miniatureTemplate = document.querySelector('#picture').content;
const miniatureSimilarItem = miniatureTemplate.querySelector('.picture');

const createPhotos = () => {
  const photos = [];

  for (let i = 0; i < PHOTOS_COUNT; i++) {
    photos.push({
      id: getRandomNumber(IDS_COUNT.MIN, IDS_COUNT.MAX),
      url: `photos/${i + 1}.jpg`,
      likes: getRandomNumber(LIKES_COUNT.MIN, LIKES_COUNT.MAX),
      description: getRandomArrayElement(PHOTO_DESCRIPTION),
      comments: createComments(),
    });
  }

  return photos;
};

const createPreview = (photos) => {
  const similarPicturesFragment = document.createDocumentFragment();

  photos.map((item) => {
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
