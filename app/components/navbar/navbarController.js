"use strict";

restApiClientApp.controller('NavbarController', ['$scope', function($scope) {
  $scope.activeMenuItem = 0;
  $scope.showMenu = $scope.$parent.showMenu;
  
  $scope.setActiveMenuItem = function(item) {
    //console.log("setActiveMenuItem");
    $scope.activeMenuItem = item;
  }

  $scope.isActiveMenuItem = function(item) {
    //console.log("isActiveMenuItem");
    var retVal = "";

    if ($scope.activeMenuItem == item) {
      retVal = "active";
    }

    return retVal;
  }

}]);