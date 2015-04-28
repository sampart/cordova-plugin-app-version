#import <Cordova/CDVPlugin.h>

@interface AppVersion : CDVPlugin

- (void)getPackageName:(CDVInvokedUrlCommand*)command;

- (void)getVersionNumber:(CDVInvokedUrlCommand*)command;

- (void)getVersionCode:(CDVInvokedUrlCommand*)command;

@end
