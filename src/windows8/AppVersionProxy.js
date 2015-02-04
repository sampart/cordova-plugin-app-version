AppVersionProxy = {
  getVersionNumber: function (successCallback, failCallback, args) {
    var version = Windows.ApplicationModel.Package.current.id.version;
    successCallback([version.major, version.minor, version.build, version.revision].join('.'));
  }  

  getAppBuildNumber: function (successCallback, failCallback, args) {
  	//build number included in version number already
    successCallback(['', '', '', ''].join('.'));
  }  
};

require("cordova/windows8/commandProxy").add("AppVersion", AppVersionProxy);