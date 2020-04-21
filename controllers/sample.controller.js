var app = angular.module('app');

app.controller('OtherController', OtherController);

function OtherController($scope) {
  $scope.something = "Hi there, I live in sample.controller.js file it's very bad :/";
}