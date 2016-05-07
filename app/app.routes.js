restApiClientApp.config(function($routeProvider) {
  $routeProvider
    .when('/story', {
      templateUrl : 'app/components/story/views/storyIndexView.html',
      controller  : 'AllStoryController',
      // 'resolve' is a map of dependencies injected into the controller.  'storyService.getIndexData()'
      // returns a promise.
      // The router will wait for the promise to be resolved or rejected before the controller is instantiated.
      // See https://docs.angularjs.org/api/ngRoute/provider/$routeProvider
      resolve: {
        allStoryData: function(storyService) {
          return storyService.all();
        }
      }
    })
    .when('/story/create', {
      templateUrl : 'app/components/story/views/storyFormView.html',
      controller  : 'CreateStoryController'
    })
    .when('/story/:id', {
      templateUrl : 'app/components/story/views/storyShowView.html',
      controller  : 'SingleStoryController',
      resolve: {
        singleStoryData: function($route, storyService) {
          return storyService.find($route.current.params.id);
        }
      }
    })
    .when('/story/:id/edit', {
      templateUrl : 'app/components/story/views/storyFormView.html',
      controller  : 'EditStoryController'
    })
    .otherwise({
      redirectTo: '/story'
    });
});
