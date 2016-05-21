"use strict";

restApiClientApp.controller('LoginController', ['$scope', '$window', 'loginService', function($scope, $window, loginService) {
  $scope.email;
  $scope.password;
  $scope.authorized = true;

  // Clear out the credentials
  loginService.setCredentials("");

  $scope.login = function() {
    //console.log("Hello " + $scope.email);
    var credentials = $window.btoa($scope.email + ":" + $scope.password);

    var promise = loginService.login(credentials);

    promise.then(
      function(response) {
        loginService.setCredentials(credentials);
        //console.log(response.status);
        
        // Redirect to story index view
        $window.location.href = '/#/story';
      },
      function(rejectReason) {
        //console.log("LoginController: login rejected");
        //console.log(rejectReason);
        if (rejectReason.status == 401) {
          console.log("User not authorized");
          $scope.authorized = false;
        }
      }
    )
  };
}]);