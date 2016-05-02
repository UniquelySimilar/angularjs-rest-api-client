restApiClientApp
.factory('allStoryService', ['$http', function($http) {
  return {
    all: function() {
      var url = "http://laravel5.restapi.localhost/story";
      //console.log("allStoryService URL: " + url);
      var config = {cache: true};

      var promise = $http.get(url, config);

      return promise;
    }
  };
}])
.factory('singleStoryService', ['$http', function($http) {
  return {
    find: function(id) {
      var url = "http://laravel5.restapi.localhost/story/" + id;
      //console.log("singleStoryService URL: " + url);
      var config = {cache: true};

      var promise = $http.get(url, config);

      return promise;
    }
  };
}])
.factory('createStoryService', ['$http', function($http) {
  return {
    create: function(story) {
      var url = "http://laravel5.restapi.localhost/story";
      console.log("createStoryService URL: " + url);
      console.log(story);

      var promise = $http.post(url, story);

      return promise;
    }
  };
}])
