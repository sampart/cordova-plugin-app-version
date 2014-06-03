// Returns a jQuery or AngularJS deferred object, or pass a success and fail callbacks if you don't want to use jQuery or AngularJS
var getAppVersion = function (success, fail) {
  var dfr;
  if ((typeof success) === 'undefined') {
    if(window.jQuery){
      dfr = jQuery.Deferred();
    } else if(window.angular){
      dfr = $q.defer();
    } else {
      return console.error('AppVersion either needs a success callback, or jQuery/AngularJS defined for using promises');
    }
    success = dfr.resolve;
    fail = dfr.reject;
  }
  // 5th param is NOT optional. must be at least empty array
  cordova.exec(success, fail, "AppVersion", "getVersionNumber", []);
  return dfr;
};

module.exports = getAppVersion;
