import { initNavToggle } from './modules/nav-toggle';
import { initForm } from './modules/form';

window.addEventListener('DOMContentLoaded', () => {


  // Modules
  // ---------------------------------
  initNavToggle();
  initForm();


  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {

  });
});

