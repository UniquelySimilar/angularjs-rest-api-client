restApiClientApp
.controller('AllStoryController', ['$scope', 'allStoryData', function($scope, allStoryData) {
  $scope.allStoryData = [];
  
  if (allStoryData.status == 200) // OK
  {
    $scope.allStoryData = allStoryData.data;
    //console.log("AllStoryController data");
    //console.log($scope.allStoryData);
  }
  else {  // Error
    console.log("Error retrieving 'allStoryData'");
    console.log("response.status: " + allStoryData.status);
    console.log("response.statusText: " + allStoryData.statusText);
  }
}])
.controller('SingleStoryController', ['$scope', 'singleStoryData', function($scope, singleStoryData) {
  $scope.story = {};
  
  if (singleStoryData.status == 200) // OK
  {
    $scope.story = singleStoryData.data;
    //console.log("SingleStoryController data");
    //console.log($scope.story);
    // TODO: Possibly implement property value changes on server
    for (var key in $scope.story) {
      if ($scope.story.hasOwnProperty(key)) {
        if ($scope.story[key] == 'NULL') {
          $scope.story[key] = '';
        };
      }
    }
  }
  else {  // Error
    console.log("Error retrieving 'singleStoryData'");
    console.log("response.status: " + singleStoryData.status);
    console.log("response.statusText: " + singleStoryData.statusText);
  }
}])
.controller('CreateStoryController', ['$scope', function($scope) {
  $scope.story = {};

  // TODO: Implement server controller method that returns nothing to use standard client routing

  $scope.create = function(story) {
    $scope.story = angular.copy(story);
  };

  $scope.reset = function() {
    $scope.story = angular.copy($scope.story);
  };

  $scope.reset();
  
}])
;