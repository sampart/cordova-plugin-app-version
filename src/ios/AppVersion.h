#import <Cordova/CDVPlugin.h>

@interface AppVersion : CDVPlugin

- (void)getVersionNumber:(CDVInvokedUrlCommand*)command;

@end
