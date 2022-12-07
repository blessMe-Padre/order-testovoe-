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

  $("#fullname").suggestions({
    token: "66b9791ad59b7d04d364c17b8d9ebd2aa5ec663f",
    type: "NAME",
    /* Вызывается, когда пользователь выбирает одну из подсказок */
    onSelect: function (suggestion) {
      console.log(suggestion);
    }
  });

  $("#address").suggestions({
    token: "66b9791ad59b7d04d364c17b8d9ebd2aa5ec663f",
    type: "ADDRESS",
    /* Вызывается, когда пользователь выбирает одну из подсказок */
    onSelect: function (suggestion) {
      console.log(suggestion);
    }
  });

  $("#email").suggestions({
    token: "66b9791ad59b7d04d364c17b8d9ebd2aa5ec663f",
    type: "EMAIL",
    /* Вызывается, когда пользователь выбирает одну из подсказок */
    onSelect: function (suggestion) {
      console.log(suggestion);
    }
  });
});
