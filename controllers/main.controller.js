(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', ['$http', MainController]);

  function MainController($http) {

    var vm = this;

    var onUserSuccess = function (result) {
      vm.person = result.data;
    };

    var onError = function (err) {
      vm.error = 'Cannot get the user information';
    };

    vm.message = 'Welcome to the Angular';

    $http.get('http://api.github.com/users/fjeansilva')
      .then(onUserSuccess, onError);
    
  };  

}());