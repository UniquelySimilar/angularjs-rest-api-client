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
.controller('SingleStoryController', ['$scope', 'singleStoryData', 'utilService',
    function($scope, singleStoryData, utilService) {
  $scope.story = {};
  
  if (singleStoryData.status == 200) // OK
  {
    $scope.story = singleStoryData.data;
    //console.log("SingleStoryController data");
    //console.log($scope.story);
    // TODO: Possibly implement property value changes on server
    utilService.replaceNull($scope.story);
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
  $scope.formFunction = "CREATE";

  $scope.save = function(story) {
    console.log("CreateStoryController.store()");
    //console.log(story);

    // TODO: Add form validation on client and/or on server
    var promise = createStoryService.save(story);
    promise.then(function(response) {
      console.log("Story creation succeeded");

      // Redirect to index view
      $window.location.href = '/#/story';
    }, function(rejectReason){
      console.log("Story creation failed: " + rejectReason);
    });
  };
}])
.controller('EditStoryController',
  ['$scope', '$window', '$routeParams', 'singleStoryService', 'editStoryService', 'utilService',
    function($scope, $window, $routeParams, singleStoryService, editStoryService, utilService) {
  //console.log("EditStoryController");

  $scope.formFunction = "EDIT";
  var id = $routeParams.id;
  console.log("ID: " + id);
  $scope.story = {};

  var singleStoryPromise = singleStoryService.find(id);
  singleStoryPromise.then(
    function(response) {
      console.log("Story find succeeded");
      $scope.story = response.data;
      utilService.replaceNull($scope.story);
    },
    function(rejectReason) {
      console.log("Story find failed: " + rejectReason);
    }
  );

  $scope.save = function(story) {
    console.log("EditStoryController.update()");
    //console.log(story);

    // TODO: Add form validation on client and/or on server
    var promise = createStoryService.save(story);
    promise.then(
      function(response) {
        console.log("Story update succeeded");

        // Redirect to index view
        //$window.location.href = '/#/story';
      },
      function(rejectReason) {
        console.log("Story update failed: " + rejectReason);
      }
    );
  };
}])
;