restApiClientApp
// AllStoryController
.controller('AllStoryController', ['$scope', '$route', 'allStoryData', 'storyService', 'utilService',
    function($scope, $route, allStoryData, storyService, utilService) {
  $scope.allStoryData = [];
  var storyDataChunks = [];
  $scope.currentStoryChunk = [];
  var chunkLength = 6;
  var currentPageIndex = 0;
  var lastPageIndex = 0;
  
  if (allStoryData.status == 200) // OK
  {
    $scope.allStoryData = allStoryData.data;
    //console.log("AllStoryController data");
    //console.log($scope.allStoryData);

    // Break the story data into chunks for table pagination
    storyDataChunks = utilService.arrayChunk($scope.allStoryData, chunkLength);
    lastPageIndex = storyDataChunks.length - 1;
    //console.log(storyDataChunks);
    $scope.currentStoryChunk = storyDataChunks[currentPageIndex];
  }
  else {  // Error
    console.log("Error retrieving 'allStoryData'");
    console.log("response.status: " + allStoryData.status);
    console.log("response.statusText: " + allStoryData.statusText);
  }

  // Story table pagination
  $scope.nextPage = function() {
    if (currentPageIndex < lastPageIndex) {
      //console.log("nextPage()");
      currentPageIndex++;
      $scope.currentStoryChunk = storyDataChunks[currentPageIndex];
    }
  }

  $scope.prevPage = function() {
    if (currentPageIndex > 0) {
      //console.log("prevPage()");
      currentPageIndex--;
      $scope.currentStoryChunk = storyDataChunks[currentPageIndex];
    }
  }

  $scope.isFirstPage = function() {
    return currentPageIndex == 0;
  }

  $scope.isLastPage = function() {
    return currentPageIndex == lastPageIndex;
  }

  // Set current story for deletion
  $scope.currentStory = {};
  $scope.setCurrentStory = function(id, title) {
    $scope.currentStory.id = id;
    $scope.currentStory.title = title;
  }

  // Event handler to reload the current page once the delete story modal dialog has finished being hidden
  $('#delete-story-modal').on('hidden.bs.modal', function (e) {
    console.log('hidden.bs.modal event handler called');
    $route.reload();
  })

  $scope.delete = function(id) {
    //console.log("delete story where ID = " + id);
    var promise = storyService.delete(id);
    promise.then(function(response) {
      //console.log("Story deletion succeeded");
      // Hide the modal manually, which should trigger the event handler defined above
      $('#delete-story-modal').modal('hide');

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
    utilService.replaceNull($scope.story);
  }
  else {  // Error
    console.log("Error retrieving 'singleStoryData'");
    console.log("response.status: " + singleStoryData.status);
    console.log("response.statusText: " + singleStoryData.statusText);
  }
}])
// CreateStoryController
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
// EditStoryController
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