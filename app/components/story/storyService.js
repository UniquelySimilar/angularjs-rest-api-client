restApiClientApp
.factory('storyService', ['$http', function($http) {
  return {
    all: function() {
      var url = "http://laravel5.restapi.localhost/story";
      //console.log("storyService.all()");
      var promise = $http.get(url);

      return promise;
    },
    find: function(id) {
      var url = "http://laravel5.restapi.localhost/story/" + id;
      //console.log("storyService.find()");
      var promise = $http.get(url);

      return promise;
    },
    save: function(story) {
      //console.log("storyService.save()");
      //console.log(story);
      
      var url = "http://laravel5.restapi.localhost/story";
      var promise = $http.post(url, story);

      return promise;
    },
    update: function(story) {
      //console.log("storyService.update()");
      //console.log(story);
      
      url = "http://laravel5.restapi.localhost/story/" + story.id;
      var promise = $http.put(url, story);

      return promise;
    }
  };
}])
;