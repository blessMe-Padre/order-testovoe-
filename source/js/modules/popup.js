const initPopup = () => {

  // popup
  const closeBtn = document.querySelector('.popup__btn');
  const popup = document.querySelector('.popup');
  const popupBody = document.querySelector('.popup__body');
  const body = document.querySelector('.page__body');
  const openBtn = document.querySelector('.order__btn');

  if (popup) {
    openBtn.addEventListener('click', () => {
      popup.classList.add('is-active');
      body.classList.add('lock');
    });

    closeBtn.addEventListener('click', () => {
      popup.classList.remove('is-active');
      body.classList.remove('lock');
    });

    // закрываем окно по esc
    window.addEventListener('keydown', function (evt) {
      if (evt.key === 'Esc' || evt.key === 'Escape') {
        if (popup.classList.contains('is-active')) {
          evt.preventDefault();
          popup.classList.remove('is-active');
          body.classList.remove('lock');
        }
      }
    });

    // закрываем окно по клику вне попапа

    popup.addEventListener('click', function (evt) {
      if (evt.target === popupBody) {
        popup.classList.remove('is-active');
        body.classList.remove('lock');
      }
    });
  }
};

export { initPopup }
