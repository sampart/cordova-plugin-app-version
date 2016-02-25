var configHelper = cordova.require('cordova/confighelper');
var cacheConfig = null;

function getXPathResult(xpath, successCallback, failCallback) {
  if(cacheConfig) { getValue(xpath, cacheConfig, successCallback); return; }
  configHelper.readConfig(function(config) {
    if(cacheConfig) { return; }
    cacheConfig = config;
    getValue(xpath, config, successCallback);
  }, function(err) {
    failCallback(err);
  });
}

function getValue(xpath, config, successCallback) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(config.xhr.responseText, "application/xml");

  var version = doc.evaluate(xpath, doc, null, XPathResult.STRING_TYPE, null);
  successCallback(version.stringValue);
}

AppVersionProxy = {
  getVersionNumber: function (successCallback, failCallback, args) {
    getXPathResult('/*[local-name()="widget"]/@version', successCallback, failCallback);
  },
  getAppName: function (successCallback, failCallback, args) {
    getXPathResult('/*[local-name()="widget"]/*[local-name()="name"]', successCallback, failCallback);
  },
  getPackageName: function (successCallback, failCallback, args) {
    getXPathResult('/*[local-name()="widget"]/@id', successCallback, failCallback);
  },
  getVersionCode: function (successCallback, failCallback, args) {
    getXPathResult('/*[local-name()="widget"]/@version', successCallback, failCallback);
  }
};

cordova.commandProxy.add("AppVersion", AppVersionProxy);
