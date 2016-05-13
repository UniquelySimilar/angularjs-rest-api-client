restApiClientApp.controller('LoginController', ['$scope', '$window', 'loginService', function($scope, $window, loginService) {
  $scope.email;
  $scope.password;

  // Clear out the credentials
  loginService.setCredentials("");

  $scope.login = function() {
    //console.log("Hello " + $scope.email);

    loginService.setCredentials($window.btoa($scope.email + ":" + $scope.password));
    //console.log("From 'LoginController' - loginService.encodedCredentials: " + loginService.getCredentials());

    // Redirect to story index view
    $window.location.href = '/#/story';
  };

}]);