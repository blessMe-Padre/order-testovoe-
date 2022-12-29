import IMask from 'imask';

const initImask = () => {

  let element = document.getElementById('phone');
  let maskOptions = {
    mask: '+{7}(000)000-00-00',
  };
  let mask = IMask(element, maskOptions);

  const TEL_REGEXP = /^(\+7)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

  let errorText = document.getElementById('error-tel');
  let input = document.getElementById('phone');

  errorText.style.display = 'none';
  function onInput() {
    if (isEmailValid(input.value)) {
      errorText.style.display = 'none';
    } else {
      errorText.style.display = 'block';
    }
  }

  input.addEventListener('input', onInput);

  function isEmailValid(value) {
    return TEL_REGEXP.test(value);
  }
};

export { initImask }
