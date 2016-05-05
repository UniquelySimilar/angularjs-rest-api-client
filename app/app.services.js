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

    testFunc: function() {
      console.log("testFunc");
    }
  };

  return utilService;
}])
;