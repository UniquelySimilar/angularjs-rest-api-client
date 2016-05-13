restApiClientApp.controller('LoginController', ['$scope', '$window', 'loginService', function($scope, $window, loginService) {
  $scope.email;
  $scope.password;

  $scope.login = function() {
    //console.log("Hello " + $scope.email);

    loginService.encodedCredentials = $window.btoa($scope.email + ":" + $scope.password);
    console.log("From 'LoginController' - loginService.encodedCredentials: " + loginService.encodedCredentials);

    // Redirect to story index view
    $window.location.href = '/#/story';
  };

}]);