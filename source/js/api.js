import _ from 'lodash';
import { showFilters } from './filters.js';

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }

  const { status, message } = response;
  throw new Error(`${status} - ${message}`);
};

const getPreviews = (onSuccess) => {
  fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then(checkStatus)
    .then((response) => response.json())
    .then((photos) => onSuccess(photos))
    .then(showFilters)
    .catch((error) => console.log(error));
};

const sendData = _.debounce((onSuccess, onFail, body) => {
  fetch('https://23.javascript.pages.academy/kekstagram', {
    method: 'POST',
    type: 'multipart/form-data',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
}, 500);

export { getPreviews, sendData };
