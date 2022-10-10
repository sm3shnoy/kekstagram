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

const checkLength = (str, length) => {
  return str.length <= length;
};

const isEscEvent = (evt) => {
  return evt.code === 'Esc' || evt.code === 'Escape';
};

const isEnterEvent = (evt) => {
  return evt.code === 'Enter';
};

export {
  getRandomNumber,
  getRandomArrayElement,
  checkLength,
  isEscEvent,
  isEnterEvent,
};
