interface Cordova {
    getAppVersion: GetAppVersion;
}

interface GetAppVersion {
    getAppName(): Promise<string>;
    getPackageName(): Promise<string>;
    getVersionNumber(): Promise<string>;
    getVersionCode(): Promise<string>;
}
