restApiClientApp.config(function($routeProvider) {
  $routeProvider
    .when('/story', {
      templateUrl : 'app/components/story/storyIndexView.html',
      controller  : 'StoryIndexController',
      // 'resolve' is a map of dependencies injected into the controller.  'storyService.getIndexData()'
      // returns a promise.
      // The router will wait for the promise to be resolved or rejected before the controller is instantiated.
      // See https://docs.angularjs.org/api/ngRoute/provider/$routeProvider
      resolve: {
        storyIndexData: function(storyIndexService) {
          return storyIndexService.getIndexData();
        }
      }
    })
    .otherwise({
      redirectTo: '/story'
    });
});
