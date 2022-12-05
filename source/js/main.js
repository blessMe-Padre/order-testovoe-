import { initNavToggle } from './modules/nav-toggle';

window.addEventListener('DOMContentLoaded', () => {


  // Modules
  // ---------------------------------
  initNavToggle();


  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {

  });
});

