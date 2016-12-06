AppVersionProxy = {
  getVersionNumber: function (successCallback, failCallback, args) {
    var version = Windows.ApplicationModel.Package.current.id.version;
    successCallback([version.major, version.minor, version.build].join('.'));
  },
  getAppName: function (successCallback, failCallback, args) {
    if(Windows.ApplicationModel.Package.current && Windows.ApplicationModel.Package.current.displayName){
      var name = Windows.ApplicationModel.Package.current.displayName;
      successCallback(name);
    } else {
      Windows.ApplicationModel.Package.current.installedLocation.getFileAsync("AppxManifest.xml").then(function (file) {
          Windows.Data.Xml.Dom.XmlDocument.loadFromFileAsync(file).then(function (xdoc) {
              var displayName = xdoc.getElementsByTagName("DisplayName");
              if (displayName && displayName.length === 1) {
                  var name = displayName[0].innerText;
                  successCallback(name);
              } else {
                  (failCallback || function(){})({ code: -1, message: "ERR_DISPLAY_NAME_NOT_FOUND" });
              }
          }, (failCallback || function(){}));
      }, (failCallback || function(){}));
    }
  },
  getPackageName: function (successCallback, failCallback, args) {
    var name = Windows.ApplicationModel.Package.current.id.name;
    successCallback(name);
  },
  getVersionCode: function (successCallback, failCallback, args) {
    var build = Windows.ApplicationModel.Package.current.id.version.build;
    successCallback(build);
  },
  getMetaData: function (successCallback, failCallback, args) {
    Windows.ApplicationModel.Package.current.installedLocation.getFileAsync("config.xml").then(function (file) {
      Windows.Data.Xml.Dom.XmlDocument.loadFromFileAsync(file).then(function (xdoc) {
        xdoc.getElementsByTagName("preference").forEach(function(preference, index, array) {
          var attributes = preference.attributes;
          if ( attributes && attributes.length === 2 ) {
            if ( attributes[0].nodeName === "name" && attributes[0].nodeValue === args[0] ) {
              successCallback(attributes[1].nodeValue);
            } else if ( attributes[1].nodeName === "name" && attributes[1].nodeValue === args[0] ) {
              successCallback(attributes[0].nodeValue);
            }
          }
        });
      }, (failCallback || function(){}));
    }, (failCallback || function(){}));
  }
};
cordova.commandProxy.add("AppVersion", AppVersionProxy);
