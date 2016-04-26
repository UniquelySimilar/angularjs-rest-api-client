restApiClientApp
.factory('storyService', ['$http', function($http) {
  return {
    getData: function() {
      var url = "http://laravel5.restapi.localhost/story";
      //console.log("storiesService URL: " + url);
      var config = {cache: true};

      var promise = $http.get(url, config);

      return promise;
    }
  };
}])
