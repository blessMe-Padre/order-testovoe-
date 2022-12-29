const initEmailValidation = () => {

  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  let errorText = document.getElementById('error-email');
  let input = document.getElementById('email');

  errorText.style.display = 'none';
  function onInput() {
    if (isEmailValid(input.value)) {
      errorText.style.display = 'none';
    } else {
      errorText.style.display = 'block';
    }
  }
  input.addEventListener('input', onInput);
  input.addEventListener('change', onInput);

  function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
  }
};

export { initEmailValidation }
