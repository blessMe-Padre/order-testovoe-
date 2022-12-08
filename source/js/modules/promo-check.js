const initPromo = () => {
  const span = document.querySelector('.input-span-js');
  const input = document.querySelector('.input-js');

  input.addEventListener('change', (evt) => {
    if (evt.target.value === '') {
      span.textContent = '';
      input.classList.remove('input-field--green');
    } else {
      let inputValue = evt.target.value;
      input.classList.add('input-field--green');
      span.textContent = `${inputValue} - купон применен`;
    }
  });

};

export { initPromo }
