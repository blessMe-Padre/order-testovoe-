const initCounter = () => {
  const counters = document.querySelectorAll('.counter');

  if (counters) {
    counters.forEach((counter) => {
      counter.addEventListener('click', (evt) => {
        const target = evt.target; // получаем нажатый counter

        if (target.closest('.counter__btn')) {
          // получает значение input
          let value = parseInt(target.closest('.counter').querySelector('.count').value, 10);

          let price = target.closest('.counter').querySelector('.before').value;

          if (target.classList.contains('counter__btn--plus')) {
            value++;
          } else {
            --value;
          }
          if (value <= 0) {
            value = 0;
            target.closest('.counter').querySelector('.counter__btn--minus').setAttribute('disabled', 'disabled');
          } else {
            target.closest('.counter').querySelector('.counter__btn--minus').removeAttribute('disabled', 'disabled');
          }

          let count = target.closest('.counter').querySelector('.count').value = value;
          target.closest('.counter').querySelector('.after').value = count * price;
        }
      });
    });
  }
};

export { initCounter }
