import _ from 'lodash';
import { shaffle, compareCommentLength, clearPicturesList } from './util.js';
import { createPreview } from './create-preview.js';

const filters = document.querySelector('.img-filters');
const filtersButtons = filters.querySelectorAll('.img-filters__button');

const filtersF = {
  'filter-default': (photos) => createPreview(photos),
  'filter-random': (photos) => createPreview(shaffle(photos).slice(0, 10)),
  'filter-discussed': (photos) =>
    createPreview(photos.slice().sort(compareCommentLength)),
};

const changeFilters = _.debounce((evt, photos) => {
  if (evt.target.id) {
    clearPicturesList();

    filtersF[evt.target.id](photos);
  }
}, 500);

const onFilterButtonClick = (photos) => {
  filters.addEventListener('click', (evt) => {
    toggleButtons(evt);
    changeFilters(evt, photos);
  });
};

const showFilters = () => {
  filters.classList.remove('img-filters--inactive');
};

const toggleButtons = (evt) => {
  if (evt.target.classList.contains('img-filters__button')) {
    filtersButtons.forEach((button) => {
      button.classList.remove('img-filters__button--active');
    });

    evt.target.classList.add('img-filters__button--active');
  }
};

export { showFilters, onFilterButtonClick };
