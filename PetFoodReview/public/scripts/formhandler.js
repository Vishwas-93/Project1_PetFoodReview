(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }
    this.$formElement = $(selector);
    console.log($(selector));
    //console.log("formhandler--------------");
    console.log(this.$formElement);

  }

  FormHandler.prototype.addSubmitHandler = function(fn) {
    this.$formElement.on('submit', function(event) {
      event.preventDefault();
      var data = {};
      $(this).serializeArray().forEach(function(item) {
        if (item.name == 'email') {
          App.user_email = item.value;
        }
        data[item.name] = item.value;
        console.log(item.name + 'is' + item.value);
      });
      console.log(data);
      fn(data);
      this.reset();
      this.elements[0].focus();
    });

  };


  App.FormHandler = FormHandler;
  window.App = App;

})(window);
