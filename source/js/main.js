/* eslint-disable object-shorthand */
/* eslint-disable no-undef */
import { initNavToggle } from './modules/nav-toggle';
import { initForm } from './modules/form';
import { initCounter } from './modules/counter';
// import { initMapSecond } from './modules/ya';
import { initMap } from './modules/yandex';

window.addEventListener('DOMContentLoaded', () => {
  // Modules
  // ---------------------------------
  initNavToggle();
  initForm();
  initCounter();
  // initMapSecond();
  initMap();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => { });
});
