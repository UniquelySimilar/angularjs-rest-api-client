"use strict";

restApiClientApp
.controller('StoryIndexController', ['$scope', '$route', 'storyIndexData', 'storyService', 'utilService',
    function($scope, $route, storyIndexData, storyService, utilService) {
  var storyDataChunks = [];
  //$scope.currentStoryChunk = [];
  var chunkLength = 6;
  var lastPageIndex = 0;
  
  $scope.storyIndexData = storyIndexData.data;
  //console.log("StoryIndexController data");
  //console.log($scope.storyIndexData);

  // Break the story data into chunks for table pagination
  storyDataChunks = utilService.arrayChunk($scope.storyIndexData, chunkLength);
  lastPageIndex = storyDataChunks.length - 1;
  //console.log(storyDataChunks);

  // Handle case where deleted story was only story on last page
  if (storyService.currentPageIndex > lastPageIndex) {
    storyService.currentPageIndex = lastPageIndex;
  }

  // Handle case where new story resulted in new page
  if (storyService.currentRcdCount != undefined &&  // Has been initialized
   ($scope.storyIndexData.length > storyService.currentRcdCount) &&
    (($scope.storyIndexData.length % chunkLength) == 1) ) {
    storyService.currentPageIndex++;
  }
  storyService.currentRcdCount = $scope.storyIndexData.length;

  $scope.currentStoryChunk = storyDataChunks[storyService.currentPageIndex];

  // Story table pagination
  $scope.nextPage = function() {
    if (storyService.currentPageIndex < lastPageIndex) {
      //console.log("nextPage()");
      storyService.currentPageIndex++;
      $scope.currentStoryChunk = storyDataChunks[storyService.currentPageIndex];
    }
  };

  $scope.prevPage = function() {
    if (storyService.currentPageIndex > 0) {
      //console.log("prevPage()");
      storyService.currentPageIndex--;
      $scope.currentStoryChunk = storyDataChunks[storyService.currentPageIndex];
    }
  };

  $scope.isFirstPage = function() {
    return storyService.currentPageIndex == 0;
  };

  $scope.isLastPage = function() {
    return storyService.currentPageIndex == lastPageIndex;
  };

  // Set current story for deletion
  $scope.currentStory = {};
  $scope.setCurrentStory = function(id, title) {
    $scope.currentStory.id = id;
    $scope.currentStory.title = title;
  };

  // Event handler to reload the current page once the delete story modal dialog has finished being hidden
  $('#delete-story-modal').on('hidden.bs.modal', function (e) {
    //console.log('hidden.bs.modal event handler called');
    $route.reload();
  });

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
  };
}]);
