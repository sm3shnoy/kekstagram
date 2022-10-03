import { getRandomNumber, getRandomArrayElement } from './util.js';
import { IDS_COUNT, AVATARS, AUTHORS, COMMENTS } from './data.js';

const COMMENTS_COUNT = {
  MIN: 1,
  MAX: 6,
};

const createComment = () => {
  return {
    id: getRandomNumber(IDS_COUNT.MIN, IDS_COUNT.MAX),
    avatar: getRandomArrayElement(AVATARS),
    name: getRandomArrayElement(AUTHORS),
    message: getRandomArrayElement(COMMENTS),
  };
};

const createComments = () =>
  new Array(getRandomNumber(COMMENTS_COUNT.MIN, COMMENTS_COUNT.MAX))
    .fill(null)
    .map(() => createComment());

export { createComments };
