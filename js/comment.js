import { getRandomNumber, getRandomArrayElement } from './util.js';
import { IDS_COUNT, AVATARS, AUTHORS, COMMENTS } from './data.js';

const COMMENTS_COUNT = {
  MIN: 1,
  MAX: 6,
};

const createComments = () => {
  const commentsCount = getRandomNumber(COMMENTS_COUNT.MIN, COMMENTS_COUNT.MAX);
  const comments = new Array(commentsCount).fill(null).map(() => {
    return {
      id: getRandomNumber(IDS_COUNT.MIN, IDS_COUNT.MAX),
      avatar: getRandomArrayElement(AVATARS),
      name: getRandomArrayElement(AUTHORS),
      message: getRandomArrayElement(COMMENTS),
    };
  });

  return comments;
};

export { createComments };
