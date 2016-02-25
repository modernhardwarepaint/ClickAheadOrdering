(function(){//Begin Arch function
  var app = angular.module('ClickAhead', []);

  app.controller('formController', function(){

    this.customer = contact;

    this.setContact = function (form){
      this.customer.fullName = form.fullName;
      this.customer.phone = form.phone;
      this.customer.email = form.email;
    };//End of setContact

  });//End of controller

var contact = {
  fullName: 'John Doe',
  phone: '5084099313',
  email: 'john@mail.com',
};

})();//End of Arch function
