restApiClientApp.controller('StoryController', ['$scope', 'storyService', function($scope, storyService) {
  $scope.templateUrl = 'app/components/story/showStories.html';
  $scope.storyData = [];
  $scope.renderTemplate = false;

  storyService
    .getData()
    .then(function(response) {
      //console.log("storyService.getData().then()");
      //console.log(response.data);
      $scope.storyData = response.data;
      $scope.renderTemplate = true;
    });
}]);