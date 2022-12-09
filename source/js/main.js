/* eslint-disable object-shorthand */
/* eslint-disable no-undef */
import { initNavToggle } from './modules/nav-toggle';
import { initForm } from './modules/form';
import { initCounter } from './modules/counter';
import { initMap } from './modules/yandex';
import { initPromo } from './modules/promo-check';
import { initTextCount } from './modules/text-count';

window.addEventListener('DOMContentLoaded', () => {
  // Modules
  // ---------------------------------
  initNavToggle();
  initForm();
  initCounter();
  initMap();
  initPromo();
  initTextCount();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => { });
});
