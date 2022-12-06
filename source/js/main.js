/* eslint-disable object-shorthand */
/* eslint-disable no-undef */
import { initNavToggle } from './modules/nav-toggle';
import { initForm } from './modules/form';
import { initCounter } from './modules/counter';

window.addEventListener('DOMContentLoaded', () => {
  // Modules
  // ---------------------------------
  initNavToggle();
  initForm();
  initCounter();
  var token = "66b9791ad59b7d04d364c17b8d9ebd2aa5ec663f";

  // Инициализирует подсказки по ФИО на указанном элементе
  function init($surname, $name) {
    var self = {};
    self.$surname = $surname;
    self.$name = $name;
    var fioParts = ["SURNAME", "NAME"];
    $.each([$surname, $name], function (index, $el) {
      var sgt = $el.suggestions({
        token: token,
        type: "NAME",
        triggerSelectOnSpace: false,
        hint: "",
        noCache: true,
        params: {
          // каждому полю --- соответствующая подсказка
          parts: [fioParts[index]]
        },
      });
    });
  };



  init($("#surname"), $("#name"));


  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => { });
});

