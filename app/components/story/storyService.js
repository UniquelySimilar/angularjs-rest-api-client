"use strict";

restApiClientApp
.factory('storyService', ['$http', 'loginService', function($http, loginService) {
  var config = {
    headers: { 'Authorization' : 'Basic ' + loginService.getCredentials() }
  }

  //console.log("From 'storyService' - loginService.getCredentials(): " + loginService.getCredentials());

  return {
    currentPageIndex: 0,
    currentRcdCount: undefined,

    all: function() {
      var url = "http://laravel5.restapi.localhost/story";
      //console.log("storyService.all()");
      var promise = $http.get(url, config);

      return promise;
    },
    find: function(id) {
      var url = "http://laravel5.restapi.localhost/story/" + id;
      //console.log("storyService.find()");
      var promise = $http.get(url, config);

      return promise;
    },
    save: function(story) {
      //console.log("storyService.save()");
      //console.log(story);
      
      var url = "http://laravel5.restapi.localhost/story";
      var promise = $http.post(url, story, config);

      return promise;
    },
    update: function(story) {
      //console.log("storyService.update()");
      //console.log(story);
      
      var url = "http://laravel5.restapi.localhost/story/" + story.id;
      var promise = $http.put(url, story, config);

      return promise;
    },
    delete: function(id) {
      //console.log("storyService.delete() for id = " + id);
      
      var url = "http://laravel5.restapi.localhost/story/" + id;
      var promise = $http.delete(url, config);

      return promise;
    }
  };
}])
;