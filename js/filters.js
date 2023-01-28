const filters = document.querySelector('.img-filters');
const filtersButtons = filters.querySelectorAll('.img-filters__button');
const defaultButton = filters.querySelector('#filter-default');
const randomButton = filters.querySelector('#filter-random');
const discussedButton = filters.querySelector('#filter-discussed');

const showFilters = () => {
  filters.classList.remove('img-filters--inactive');
};

const toggleButtons = (evt) => {
  filtersButtons.forEach((button) => {
    button.classList.remove('img-filters__button--active');
  });
  evt.target.classList.add('img-filters__button--active');
};

const showDefaultPicturesClick = (cb) => {
  defaultButton.addEventListener('click', (evt) => {
    toggleButtons(evt);
    cb();
  });
};

const showRandomPicturesClick = (cb) => {
  randomButton.addEventListener('click', (evt) => {
    toggleButtons(evt);
    cb();
  });
};

const showDiscussedPicturesClick = (cb) => {
  discussedButton.addEventListener('click', (evt) => {
    toggleButtons(evt);
    cb();
  });
};

export {
  showFilters,
  showDefaultPicturesClick,
  showRandomPicturesClick,
  showDiscussedPicturesClick,
};
