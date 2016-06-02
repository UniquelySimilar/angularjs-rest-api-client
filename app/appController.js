"use strict";

restApiClientApp
.controller('appController', function($rootScope, $window) {
  $rootScope.showMenu = false;

  $rootScope.$on("$routeChangeError", 
                 function (event, current, previous, rejection) {
    console.log("failed to change routes");
    //console.log(event);
    //console.log(current);
    //console.log(previous);
    //console.log(rejection);

    if(rejection.status == 401) {
        $window.location.href = '/#/login';
    }
  });
});