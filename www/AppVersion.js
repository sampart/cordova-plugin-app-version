(function (cordova) {
  // Returns a jQuery deferred object, or pass a callback if you don't want to use jQuery
  cordova.getAppVersion = function (callback) {
    var dfr = null;
    if ((typeof callback) === null && jQuery) {
      dfr = jQuery.deferred();
      callback = dfr.resolve;
    }
    // my plugin doesn't even have a failure callback, so we pass null
    // 5th param is NOT optional. must be at least empty array
    cordova.exec(callback, null, "MyCDVPlugin", "getVersionNumber", []);
    return dfr;
  };
}(cordova));
