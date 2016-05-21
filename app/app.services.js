restApiClientApp
.factory('utilService', [function() {
  var utilService = {
    replaceNull: function(obj) {
      // Replace string 'NULL' with empty string
      // NOTE: Objects are passed by reference, so function will modify original parameter object
      //console.log("replaceNull");

      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (obj[key] == 'NULL') {
            obj[key] = '';
          }
        }
      }
    },
    arrayChunk: function(ary, len) {
      var multiDimAry = [],
          i = 0,
          n = ary.length;

      while (i < n) {
        multiDimAry.push(ary.slice(i, i += len));
      }

      return multiDimAry;
    }
  };

  return utilService;
}]);
// HTTP code 401 - unauthorized interceptor
/*
.factory('http401interceptor', function($q, $location) {
  return {
    // NOTE: this wasn't called on HTTP 401 status code
    response: function(response) {
      // do something on success
      console.log("response interceptor called");
      console.log("response.status: " + response.status);

      return response;
    },
    responseError: function(response) {
      console.log("response error interceptor called");
      console.log("response.status: " + response.status);

      if(response.status == 401) {
        console.log("HTTP 401 status code intercepted");

        //$location.path('/login');
        return $q.reject(response);
      }
      else {
        return $q.reject(response);
      }
    }
  };
})
*/
