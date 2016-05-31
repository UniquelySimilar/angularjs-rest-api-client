"use strict";

restApiClientApp
.factory('loginService', ['$http', '$window', function($http, $window) {
  return {
    getCredentials: function() {
      var credentials = localStorage.getItem("credentials");
      //console.log("loginService.getCredentials(): " + credentials);
      return credentials;
    },
    setCredentials: function(credentials) {
      //console.log("loginService.setCredentials(): " + credentials);
      localStorage.setItem("credentials", credentials);
    },
    login: function(credentials) {
      //console.log("loginService.login()");
      //console.log("credentials: " + credentials);

      var url = "http://laravel5.restapi.localhost/login";
      var config = {
        headers: { 'Authorization' : 'Basic ' + credentials }
      }
      var promise = $http.get(url, config);

      return promise;
    },
    isLoggedIn: function() {
      var retVal = true;

      if (this.getCredentials() == "") {
        retVal = false;
        $window.location.href = '/#/login';
      }

      return retVal;
    }
  };
}]);
