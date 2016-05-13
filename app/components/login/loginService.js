restApiClientApp
.factory('loginService', function() {
  // TODO: Modify so that value is doesn't change when StoryController is reinstantiated by page refresh
  return {
    encodedCredentials: ''
  }
});