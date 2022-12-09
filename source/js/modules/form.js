import { initPopup } from './popup';

const initForm = () => {

  const { form } = document.forms;

  const formHandler = (evt) => {
    evt.preventDefault();

    /**
     * FIXME:
     * скрыть токен
     */
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
    initPopup();
    console.log(values);
  };

  form.addEventListener('submit', formHandler);
};

export { initForm }
