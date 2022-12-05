const initNavToggle = () => {
  const nav = document.querySelector('.nav');

  const button = document.querySelector('.nav__button');
  button.addEventListener('click', () => {
    nav.classList.toggle('is-active');
    button.classList.toggle('is-active');
  });

  window.addEventListener('resize', () => {
    const bodyWidth = innerWidth;
    if (bodyWidth > 768) {
      nav.classList.remove('is-active');
      button.classList.remove('is-active');
    }
  }, false);
};

export { initNavToggle }
