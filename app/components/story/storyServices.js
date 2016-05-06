restApiClientApp
.factory('allStoryService', ['$http', function($http) {
  return {
    all: function() {
      var url = "http://laravel5.restapi.localhost/story";
      //console.log("allStoryService URL: " + url);
      var promise = $http.get(url);

      return promise;
    }
  };
}])
.factory('singleStoryService', ['$http', function($http) {
  return {
    find: function(id) {
      var url = "http://laravel5.restapi.localhost/story/" + id;
      //console.log("singleStoryService URL: " + url);
      var promise = $http.get(url);

      return promise;
    }
  };
}])
.factory('saveStoryService', ['$http', function($http) {
  return {
    save: function(story) {
      var url = "http://laravel5.restapi.localhost/story";
      //console.log("saveStoryService URL: " + url);
      //console.log(story);
      var promise = $http.post(url, story);

      return promise;
    }
  };
}])
.factory('updateStoryService', ['$http', function($http) {
  return {
    save: function(story) {
      var url = "http://laravel5.restapi.localhost/story/" + story.id;
      //console.log("updateStoryService URL: " + url);
      //console.log(story);
      var promise = $http.put(url, story);

      return promise;
    }
  };
}])
;