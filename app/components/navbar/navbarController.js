"use strict";

restApiClientApp.controller('NavbarController', ['$scope', '$window', 'loginService', function($scope, $window, loginService) {
  $scope.logout = function() {
    loginService.setCredentials("");
    $window.location.href = "/";
  }
}]);