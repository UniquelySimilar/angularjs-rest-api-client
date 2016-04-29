restApiClientApp.config(function($routeProvider) {
  $routeProvider
    .when('/story', {
      templateUrl : 'app/components/story/storyIndexView.html',
      controller  : 'AllStoryController',
      // 'resolve' is a map of dependencies injected into the controller.  'storyService.getIndexData()'
      // returns a promise.
      // The router will wait for the promise to be resolved or rejected before the controller is instantiated.
      // See https://docs.angularjs.org/api/ngRoute/provider/$routeProvider
      resolve: {
        allStoryData: function(allStoryService) {
          return allStoryService.all();
        }
      }
    })
    .when('/story/:id', {
      templateUrl : 'app/components/story/storyShowView.html',
      controller  : 'SingleStoryController',
      resolve: {
        singleStoryData: function($route, singleStoryService) {
          return singleStoryService.find($route.current.params.id);
        }
      }
    })
    .when('/story/:id/edit', {
      templateUrl : 'app/components/story/storyEditView.html',
      controller  : 'SingleStoryController',
      resolve: {
        singleStoryData: function($route, singleStoryService) {
          return singleStoryService.find($route.current.params.id);
        }
      }
    })
    .otherwise({
      redirectTo: '/story'
    });
});
