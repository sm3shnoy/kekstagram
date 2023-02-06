import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import { preview } from './edit-photo-modal.js';

const slider = document.querySelector('.effect-level__slider');
const effectsRadio = document.querySelectorAll('.effects__radio');
const effectLevel = document.querySelector('.effect-level');
const effectValue = document.querySelector('.effect-level__value');

const updateSliderOptions = (min, max, start, step, filterName, unit) => {
  slider.noUiSlider.updateOptions({
    range: {
      min: min,
      max: max,
    },
    start: start,
    step: step,
  });

  slider.noUiSlider.on('update', (values, handle) => {
    effectValue.value = values[handle];
    effectValue.min = min;
    effectValue.max = max;
    effectValue.step = step;
    preview.style.filter = `${filterName}(${effectValue.value}${unit})`;
  });
};

const addEffect = (evt) => {
  if (!slider.noUiSlider) {
    noUiSlider.create(slider, {
      start: 1,
      connect: 'lower',
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
      format: {
        to: function (value) {
          if (Number.isInteger(value)) {
            return value.toFixed(0);
          }

          return value.toFixed(1);
        },
        from: function (value) {
          return parseFloat(value);
        },
      },
    });
  }

  preview.className = `effects__preview--${evt.target.value}`;

  switch (evt.target.value) {
    case 'chrome':
      effectLevel.style.display = 'block';
      updateSliderOptions(0, 1, 1, 0.1, 'grayscale', '');
      break;
    case 'sepia':
      effectLevel.style.display = 'block';
      updateSliderOptions(0, 1, 1, 0.1, 'sepia', '');
      break;
    case 'marvin':
      effectLevel.style.display = 'block';
      updateSliderOptions(0, 100, 100, 1, 'invert', '%');
      break;
    case 'phobos':
      effectLevel.style.display = 'block';
      updateSliderOptions(0, 3, 3, 0.1, 'blur', 'px');
      break;
    case 'heat':
      effectLevel.style.display = 'block';
      updateSliderOptions(1, 3, 3, 0.1, 'brightness', '');
      break;
    default:
      clearFilter();
  }
};

const clearFilter = () => {
  effectValue.value = '';
  effectLevel.style.display = 'none';
  preview.style.filter = 'none';
  effectsRadio[0].checked = true;
};

effectsRadio.forEach((item) => {
  item.addEventListener('change', addEffect);
});

export { clearFilter };
