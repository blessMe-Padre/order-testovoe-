import { initButtonClick } from './modules/buttonclick';

window.addEventListener('DOMContentLoaded', () => {


  // Modules
  // ---------------------------------
  initButtonClick();


  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {

  });
});

