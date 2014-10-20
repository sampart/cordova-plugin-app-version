module.exports = {
    getVersionNumber: function() {
        return blackberry.app.version;
    }
};

require("cordova/exec/proxy").add("AppVersion", module.exports);