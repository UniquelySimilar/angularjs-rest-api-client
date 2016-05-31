"use strict";

restApiClientApp
.controller('StoryCreateController', ['$scope', '$window', 'storyService', 'loginService',
  function($scope, $window, storyService, loginService) {
  //console.log("CreateStoryController");

  // Verify user logged in
  loginService.isLoggedIn();

  $scope.formFunction = "CREATE";

  // Set focus on story title
  $('#story-title').focus();

  $scope.save = function(story) {
    //console.log("StoryCreateController.store()");
    //console.log(story);

    var promise = storyService.save(story);
    promise.then(
      function(response) {
        //console.log("Story creation succeeded");

        // Redirect to index view
        $window.location.href = '/#/story';
      },
      function(rejectReason){
        //console.log("Story creation failed");
        //console.log(rejectReason);
        if (rejectReason.status == 422) {
          //console.log("Unprocessable Entity");
          if (rejectReason.data.title != undefined) {
              //console.log("title in rejectReason.data");
              $scope.titleInvalidMsg = rejectReason.data.title[0];
          }
        }
      }
    );
  };
}]);
