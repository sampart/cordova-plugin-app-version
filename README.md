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

Written by Robert (Jamie) Munro, based the following stack overflow posts:

* [iOS](http://stackoverflow.com/a/14713364/3408)
* [Android](http://stackoverflow.com/a/3637686/3408)
