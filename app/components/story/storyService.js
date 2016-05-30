"use strict";

restApiClientApp
.factory('storyService', ['$http', 'loginService', function($http, loginService) {
  return {
    currentPageIndex: 0,
    currentRcdCount: undefined,

    // NOTE: Need to initialize $http 'config' objects per call.  Possibly move to request interceptor.

    all: function() {
      var url = "http://laravel5.restapi.localhost/story";
      //console.log("storyService.all()");
      var promise = $http.get(url, { headers: { 'Authorization' : 'Basic ' + loginService.getCredentials() } });

      return promise;
    },
    find: function(id) {
      var url = "http://laravel5.restapi.localhost/story/" + id;
      //console.log("storyService.find()");
      var promise = $http.get(url, { headers: { 'Authorization' : 'Basic ' + loginService.getCredentials() } });

      return promise;
    },
    save: function(story) {
      //console.log("storyService.save()");
      //console.log(story);
      
      var url = "http://laravel5.restapi.localhost/story";
      var promise = $http.post(url, story, { headers: { 'Authorization' : 'Basic ' + loginService.getCredentials() } });

      return promise;
    },
    update: function(story) {
      //console.log("storyService.update()");
      //console.log(story);
      
      var url = "http://laravel5.restapi.localhost/story/" + story.id;
      var promise = $http.put(url, story, { headers: { 'Authorization' : 'Basic ' + loginService.getCredentials() } });

      return promise;
    },
    delete: function(id) {
      //console.log("storyService.delete() for id = " + id);
      
      var url = "http://laravel5.restapi.localhost/story/" + id;
      var promise = $http.delete(url, { headers: { 'Authorization' : 'Basic ' + loginService.getCredentials() } });

      return promise;
    }
  };
}])
;