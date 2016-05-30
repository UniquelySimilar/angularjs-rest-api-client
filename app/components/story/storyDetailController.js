"use strict";

restApiClientApp
.controller('StoryDetailController', ['$scope', 'storyDetailData', 'utilService',
    function($scope, storyDetailData, utilService) {
  
  $scope.story = storyDetailData.data;
  //console.log("StoryDetailController data");
  //console.log($scope.story);
  utilService.replaceNull($scope.story);
}]);
