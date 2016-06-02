"use strict";

restApiClientApp.controller('LoginController', ['$scope', '$window', 'loginService', function($scope, $window, loginService) {
  $scope.email;
  $scope.password;
  $scope.$parent.showMenu = false;

  console.log("LoginController parent scope showMenu: " + $scope.$parent.showMenu);

  // Clear out the credentials
  loginService.setCredentials("");

  $scope.login = function() {
    //console.log("LoginController.login()");
    //console.log("Hello " + $scope.email);
    var credentials = $window.btoa($scope.email + ":" + $scope.password);
    //console.log("credentials: " + credentials);

    var promise = loginService.login(credentials);

    promise.then(
      function(response) {
        //console.log(response.status);
        loginService.setCredentials(credentials);

        $scope.$parent.showMenu = true;
        
        // Redirect to story index view
        $window.location.href = '/#/story';
      },
      function(rejectReason) {
        //console.log("LoginController: login rejected");
        //console.log(rejectReason);
        if (rejectReason.status == 401) {
          console.log("User not authorized");
          $scope.loginError = true;
          $scope.$parent.showMenu = false;
        }
      }
    )
  };
}]);