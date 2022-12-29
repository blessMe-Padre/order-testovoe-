/* eslint-disable */
window.addEventListener('DOMContentLoaded', () => {
  var token = "66b9791ad59b7d04d364c17b8d9ebd2aa5ec663f";

  //Инициализирует подсказки по ФИО на указанном элементе
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

  $("#email").suggestions({
    token,
    type: "EMAIL",
    onSelect: function (suggestion) {
      if (isEmailValid(suggestion.value)) {
        errorText.style.display = 'none';
      } else {
        errorText.style.display = 'block';
      }
    }
  });
});
