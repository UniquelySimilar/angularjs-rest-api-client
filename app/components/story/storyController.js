restApiClientApp
.controller('StoryIndexController', ['$scope', 'storyIndexData', function($scope, storyIndexData) {
  $scope.storyIndexData = [];
  
  if (storyIndexData.status == 200) // OK
  {
    $scope.storyIndexData = storyIndexData.data;
    //console.log("From controller: storyIndexData");
    //console.log($scope.storyIndexData);
  }
  else {  // Error
    console.log("Error retrieving 'storyIndexData'");
    console.log("response.status: " + storyIndexData.status);
    console.log("response.statusText: " + storyIndexData.statusText);
  }
}])
;