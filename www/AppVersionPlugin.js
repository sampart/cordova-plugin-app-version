// Returns a jQuery deferred object, or pass a success and fail callbacks if you don't want to use jQuery
var getAppVersion = function (success, fail) {
  var dfr = null;
  if ((typeof success) === 'undefined' && window.jQuery) {
    dfr = jQuery.Deferred();
    success = dfr.resolve;
    fail = dfr.reject;
  }
  // 5th param is NOT optional. must be at least empty array
  cordova.exec(success, fail, "AppVersion", "getVersionNumber", []);
  return dfr;
};

module.exports = getAppVersion;
