const AUTHORS = [
  'Артём',
  'Саша',
  'Вадим',
  'Юлия',
  'Наташа',
  'Кекс',
  'Андрей',
  'Сергей',
  'Александра',
  'Танюша',
  'Аркадий',
  'Рома',
  'Хулиган333',
  'Отпадный дед',
];
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const AVATARS = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg',
];
const PHOTO_DESCRIPTION = [
  'Ну, вот как-то так!',
  'А неплохо, да?',
  'Видали-видали? Всё у меня зашибись!',
  'Если бы не родные рядом люди, у меня не было бы всего этого!',
  'Я очень горжусь собой! Думаю, что надо продолжать в том же духе!',
  'xD Прикольно же, ну!',
  'Почаще бы так собираться. Давай-те не пропадайте там!',
  'АФФФТОР ЖЖЕТ! ПИШИ ЕСЧО!',
  'Как-то странно это выглядит, конечно... Но я так вдохновился этим всем)',
  'Был бы я художником, я бы рисовал это каждый день!',
  'Я просто оставлю это здесь.',
  'Мой друг мне сказал, что надо чаще отдыхать и дело пойдет. И оно пошло, скажу я вам!!',
  'Я бы рад показать вам больше, но у вас не хватит денег! xD',
  'Это всё мое, абсолютно всё!',
  'Я счастлива здесь и сейчас. Мне больше ничего не надо.',
  'Почему-то в этих краях принято ходить с кислой миной... Но это не про меня, детка!)',
  'Я бы бросил свою работу и переехал сюда жить.',
  'Не знаю как вам, а мне по кайфу!',
  'Что-то надо придумать, но не сейчас.',
  'Всем привет! Я еще здесь. Наслаждайтесь)',
  'Ставьте лайки! Я же невероятный!',
  'Мне нужно больше солнца) И хорошо, что солнце всегда со мной!',
  'Дайте мне миллиард долларов и вы меня больше не увидите, потому что я буду здесь вечно!',
  'Я старался! Моя любимая фотка.',
  'Мне тут понравилось. Приеду еще, обязательно!',
  'Ну, что? До скорого, дорогие подписчики)',
  'Я классный! И вы все тоже классные!',
];
const PHOTOS_COUNT = 25;
const COMMENTS_COUNT = {
  MIN: 1,
  MAX: 6,
};
const LIKES_COUNT = {
  MIN: 15,
  MAX: 200,
};
const IDS_COUNT = {
  MIN: 0,
  MAX: 999,
};

const photos = [];

const getRandomNumber = (min, max) => {
  if (min < 0 || max <= 0) {
    return -1;
  }

  if (max < min) {
    [max, min] = [min, max];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomNumber(0, elements.length - 1)];
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

const checkLength = (str, length) => {
  return str.length <= length;
};

console.log(createPhotos());
