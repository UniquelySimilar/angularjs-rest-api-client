restApiClientApp
.factory('storyIndexService', ['$http', function($http) {
  return {
    getIndexData: function() {
      var url = "http://laravel5.restapi.localhost/story";
      //console.log("storyService URL: " + url);
      var config = {cache: true};

      var promise = $http.get(url, config);

      return promise;
    }
  };
}])
