# Cordova AppVersion plugin

Reads the version of your app from the target build settings.

If you are using jQuery, use:

    cordova.getAppVersion().then(function (version) {
        $('.version').text(version);
    });

If not:

    cordova.getAppVersion(function (version) {
        alert(version);
    });

Written by Robert (Jamie) Munro, based on [this](http://stackoverflow.com/a/14713364/3408) stack overflow answer.
