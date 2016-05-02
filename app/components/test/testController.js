restApiClientApp
.controller('TestController', ['$scope', '$http', 'createStoryService', function($scope, $http, createStoryService) {
  $scope.testFunction = function($http) {
    //console.log("TestController");
    var story = { 'title': 'test story'};
    var promise = createStoryService.create(story);

    promise.then(function successCallback(result) {
      console.log('Success');
      console.log(result);
    }, function errorCallback(rejectionReason) {
      console.log('Error: ' + rejectionReason);
    });
  }
}]);