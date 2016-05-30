"use strict";

restApiClientApp
.controller('StoryEditController',
  ['$scope', '$window', '$routeParams', 'storyService', 'utilService',
    function($scope, $window, $routeParams, storyService, utilService) {
  //console.log("StoryEditController");

  $scope.formFunction = "EDIT";
  var id = $routeParams.id;
  //console.log("ID: " + id);

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
    //console.log("StoryEditController.save()");
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
        console.log("Story update failed");
        console.log(rejectReason);
      }
    );
  };
}]);