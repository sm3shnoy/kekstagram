const Zoom = {
  STEP: 25,
  DEFAULT_VALUE: 100,
  MAX_VALUE: 100,
  MIN_VALUE: 25,
};
const minusButton = document.querySelector('.scale__control--smaller');
const plusButton = document.querySelector('.scale__control--bigger');
const zoomValue = document.querySelector('.scale__control--value');
const preview = document.querySelector('.img-upload__preview img');

const zoom = (evt) => {
  let currentZoom = parseInt(zoomValue.value, 10);

  if (evt.target === minusButton && currentZoom > Zoom.MIN_VALUE) {
    currentZoom += Zoom.STEP * -1;
  }

  if (evt.target === plusButton && currentZoom < Zoom.MAX_VALUE) {
    currentZoom += Zoom.STEP;
  }

  zoomValue.value = currentZoom + '%';
  preview.style.transform = `scale(${currentZoom / 100})`;
};

minusButton.addEventListener('click', zoom);
plusButton.addEventListener('click', zoom);

export { preview, zoomValue, Zoom };
