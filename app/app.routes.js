"use strict";

restApiClientApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl : 'app/components/login/views/loginFormView.html',
      controller  : 'LoginController'
    })
    .when('/story', {
      templateUrl : 'app/components/story/views/storyIndexView.html',
      controller  : 'StoryIndexController',
      // 'resolve' is a map of dependencies injected into the controller.  'storyService.getIndexData()'
      // returns a promise.
      // The router will wait for the promise to be resolved or rejected before the controller is instantiated.
      // See https://docs.angularjs.org/api/ngRoute/provider/$routeProvider
      // If the promise is rejected, the $routeChangeError will be handled $rootScope in appController
      resolve: {
        storyIndexData: function(storyService) {
          return storyService.all();
        }
      }
    })
    .when('/story/create', {
      templateUrl : 'app/components/story/views/storyFormView.html',
      controller  : 'StoryCreateController'
    })
    .when('/story/:id', {
      templateUrl : 'app/components/story/views/storyShowView.html',
      controller  : 'StoryDetailController',
      resolve: {
        storyDetailData: function($route, storyService) {
          return storyService.find($route.current.params.id);
        }
      }
    })
    .when('/story/:id/edit', {
      templateUrl : 'app/components/story/views/storyFormView.html',
      controller  : 'StoryEditController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
