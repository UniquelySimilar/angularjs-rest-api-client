restApiClientApp.controller('LoginController', ['$scope', '$window', 'loginService', function($scope, $window, loginService) {
  $scope.email;
  $scope.password;

  // Clear out the credentials
  loginService.setCredentials("");

  $scope.login = function() {
    //console.log("Hello " + $scope.email);
    var credentials = $window.btoa($scope.email + ":" + $scope.password);

    var promise = loginService.login(credentials);

    promise.then(
      function(response) {
        loginService.setCredentials(credentials);
        // Redirect to story index view
        $window.location.href = '/#/story';
      },
      function(rejectReason) {
        console.log("login rejected");
        //console.log(rejectReason);
      }
    )

  };

}]);