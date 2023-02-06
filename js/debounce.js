const debounce = (cb, delay) => {
  let timer = null;

  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => cb(...args), delay);
  };
};

export { debounce };
