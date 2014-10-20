// Returns a jQuery or AngularJS deferred object, or pass a success and fail callbacks if you don't want to use jQuery or AngularJS
var getAppVersion = function (success, fail) {
  var toReturn, deferred;
  if ((typeof success) === 'undefined') {
    if(window.jQuery){
      deferred = jQuery.Deferred();
      toReturn = deferred;
    } else if(window.angular){
      var injector = angular.injector(["ng"]);
      var $q = injector.get("$q");
      deferred = $q.defer();
      toReturn = deferred.promise
    } else {
      return console.error('AppVersion either needs a success callback, or jQuery/AngularJS defined for using promises');
    }
    success = deferred.resolve;
    fail = deferred.reject;
  }
  // 5th param is NOT optional. must be at least empty array
  cordova.exec(success, fail, "AppVersion", "getVersionNumber", []);
  return toReturn;
};

module.exports = getAppVersion;
