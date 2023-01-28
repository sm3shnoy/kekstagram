const Keys = {
  ESC: 'Esc',
  ESCAPE: 'Escape',
  ENTER: 'Enter',
};

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

const shaffle = (elements) => {
  let result = [];

  for (let i = 0; i < elements.length; i++) {
    let random = getRandomArrayElement(elements);

    if (result.includes(random)) {
      getRandomArrayElement(elements);
    } else {
      result.push(random);
    }
  }

  return result;
};

const clearPicturesList = () => {
  const picturesList = document.querySelector('.pictures');
  const pictures = picturesList.children;

  for (let i = pictures.length - 1; i >= 0; i--) {
    if (pictures[i].classList.contains('picture')) {
      pictures[i].remove();
    }
  }
};

const compareCommentLength = (photoA, photoB) => {
  return photoB.comments.length - photoA.comments.length;
};

const isEscEvent = (evt) => {
  return evt.code === Keys.ESC || evt.code === Keys.ESCAPE;
};

const isEnterEvent = (evt) => {
  return evt.code === Keys.ENTER;
};

export {
  getRandomNumber,
  getRandomArrayElement,
  isEscEvent,
  isEnterEvent,
  shaffle,
  compareCommentLength,
  clearPicturesList,
};
