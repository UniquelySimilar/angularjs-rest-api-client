restApiClientApp
.factory('loginService', ['$http', function($http) {
  return {
    getCredentials: function() {
      return localStorage.getItem("credentials");
    },
    setCredentials: function(credentials) {
      localStorage.setItem("credentials", credentials);
    },
    login: function(credentials) {
      console.log("loginService.login()");

      var url = "http://laravel5.restapi.localhost/login";
      var config = {
        headers: { 'Authorization' : 'Basic ' + credentials }
      }
      var promise = $http.get(url, config);

      return promise;
    }
  };
}]);
