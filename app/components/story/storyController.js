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
.controller('CreateStoryController', ['$scope', '$window', 'createStoryService',
  function($scope, $window, createStoryService) {
  //console.log("CreateStoryController");
  //$scope.storyError = {};

  $scope.store = function(story) {
    console.log("CreateStoryController.store()");
    //console.log(story);

    // TODO: Add form validation on client and/or on server
    var promise = createStoryService.store(story);
    promise.then(function(response) {
      console.log("Story creation succeeded");

      // Redirect to index view
      $window.location.href = '/#/story';
    }, function(rejectReason){
      console.log("Story creation failed: " + rejectReason);
    });
  };
}])
.controller('EditStoryController', ['$scope', '$window', 'editStoryService',
  function($scope, $window, editStoryService) {
  //console.log("EditStoryController");

  $scope.update = function(story) {
    console.log("EditStoryController.update()");
    //console.log(story);

    // TODO: Add form validation on client and/or on server
    var promise = createStoryService.update(story);
    promise.then(function(response) {
      console.log("Story update succeeded");

      // Redirect to index view
      $window.location.href = '/#/story';
    }, function(rejectReason){
      console.log("Story update failed: " + rejectReason);
    });
  };
}])
;