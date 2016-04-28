restApiClientApp
.controller('StoryIndexController', ['$scope', 'storyIndexData', function($scope, storyIndexData) {
  $scope.storyIndexData = [];
  
  if (storyIndexData.status == 200) // OK
  {
    $scope.storyIndexData = storyIndexData.data;
    //console.log("StoryIndexController data");
    //console.log($scope.storyIndexData);
  }
  else {  // Error
    console.log("Error retrieving 'storyIndexData'");
    console.log("response.status: " + storyIndexData.status);
    console.log("response.statusText: " + storyIndexData.statusText);
  }
}])
.controller('StoryShowController', ['$scope', 'storyShowData', function($scope, storyShowData) {
  $scope.story = {};
  
  if (storyShowData.status == 200) // OK
  {
    $scope.story = storyShowData.data;
    //console.log("StoryShowController data");
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
    console.log("Error retrieving 'storyShowData'");
    console.log("response.status: " + storyShowData.status);
    console.log("response.statusText: " + storyShowData.statusText);
  }
}])
;