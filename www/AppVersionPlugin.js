(function (cordova) {
  // Returns a jQuery deferred object, or pass a callback if you don't want to use jQuery
  cordova.getAppVersion = function (callback) {
    var dfr = null;
    if ((typeof callback) === 'undefined' && jQuery) {
      dfr = jQuery.Deferred();
      callback = dfr.resolve;
    }
    // Plugin doesn't even have a failure callback, so we pass null
    // 5th param is NOT optional. must be at least empty array
    cordova.exec(callback, null, "AppVersion", "getVersionNumber", []);
    return dfr;
  };
}(cordova));
