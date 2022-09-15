import { getRandomNumber, getRandomArrayElement } from './util.js';
import { createComments } from './comment.js';
import {
  PHOTOS_COUNT,
  IDS_COUNT,
  LIKES_COUNT,
  PHOTO_DESCRIPTION,
} from './data.js';
const photos = [];

const createPhotos = () => {
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

export { createPhotos };
