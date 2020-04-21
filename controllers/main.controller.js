(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

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

var app = angular.module('app');

app.controller('OtherController', OtherController);

function OtherController($scope) {
  $scope.something = 'Hi there, I live in main.controller.js file :)';
}