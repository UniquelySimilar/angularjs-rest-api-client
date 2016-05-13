restApiClientApp
.factory('loginService', function() {
  return {
    getCredentials: function() {
      return localStorage.getItem("credentials");
    },

    setCredentials: function(credentials) {
      localStorage.setItem("credentials", credentials);
    }
  };
});
