restApiClientApp
.controller('AllStoryController', ['$scope', '$route','allStoryData', 'storyService',
    function($scope, $route, allStoryData, storyService) {
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

  $scope.currentStory = {};
  $scope.setCurrentStory = function(id, title) {
    $scope.currentStory.id = id;
    $scope.currentStory.title = title;
  }

  $scope.delete = function(id) {
    console.log("delete story where ID = " + id);
    var promise = storyService.delete(id);
    promise.then(function(response) {
      console.log("Story deletion succeeded");

      // Reload the current page
      $route.reload();
    }, function(rejectReason){
      console.log("Story deletion failed: " + rejectReason);
    });
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
.controller('CreateStoryController', ['$scope', '$window', 'storyService',
  function($scope, $window, storyService) {
  //console.log("CreateStoryController");
  $scope.formFunction = "CREATE";

  $scope.save = function(story) {
    //console.log("CreateStoryController.store()");
    //console.log(story);

    // TODO: Add form validation on client and/or on server
    var promise = storyService.save(story);
    promise.then(function(response) {
      //console.log("Story creation succeeded");

      // Redirect to index view
      $window.location.href = '/#/story';
    }, function(rejectReason){
      console.log("Story creation failed: " + rejectReason);
    });
  };
}])
.controller('EditStoryController',
  ['$scope', '$window', '$routeParams', 'storyService', 'utilService',
    function($scope, $window, $routeParams, storyService, utilService) {
  //console.log("EditStoryController");

  $scope.formFunction = "EDIT";
  var id = $routeParams.id;
  //console.log("ID: " + id);
  $scope.story = {};

  var singleStoryPromise = storyService.find(id);
  singleStoryPromise.then(
    function(response) {
      //console.log("Story find succeeded");
      $scope.story = response.data;
      utilService.replaceNull($scope.story);
    },
    function(rejectReason) {
      console.log("Story find failed: " + rejectReason);
    }
  );

  $scope.save = function(story) {
    //console.log("EditStoryController.update()");
    //console.log(story);

    // TODO: Add form validation on client and/or on server
    var promise = storyService.update(story);
    promise.then(
      function(response) {
        //console.log("Story update succeeded");

        // Redirect to story detail view
        $window.location.href = '/#/story/' + id;
      },
      function(rejectReason) {
        console.log("Story update failed: " + rejectReason);
      }
    );
  };
}])
;