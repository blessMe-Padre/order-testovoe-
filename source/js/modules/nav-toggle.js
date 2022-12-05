const initNavToggle = () => {
  const nav = document.querySelector('.nav');

  const button = document.querySelector('.nav__button');
  button.addEventListener('click', () => {
    nav.classList.toggle('is-active');
  });
}

export { initNavToggle }
