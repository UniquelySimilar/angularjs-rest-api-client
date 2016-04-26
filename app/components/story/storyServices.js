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
.factory('storyShowService', ['$http', function($http) {
  return {
    getIndexData: function(id) {
      var url = "http://laravel5.restapi.localhost/story/" + id;
      console.log("storyService URL: " + url);
      var config = {cache: true};

      var promise = $http.get(url, config);

      return promise;
    }
  };
}])
