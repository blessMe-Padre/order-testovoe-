const initNavToggle = () => {
  const nav = document.querySelector('.nav');
  const body = document.querySelector('.page__body');

  const button = document.querySelector('.nav__button');
  button.addEventListener('click', () => {
    nav.classList.toggle('is-active');
    button.classList.toggle('is-active');
    body.classList.toggle('lock');
  });

  window.addEventListener('resize', () => {
    const bodyWidth = innerWidth;
    if (bodyWidth > 768) {
      nav.classList.remove('is-active');
      button.classList.remove('is-active');
      body.classList.remove('lock');
    }
  }, false);
};

export { initNavToggle }
