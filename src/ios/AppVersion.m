#import "AppVersion.h"
#import <Cordova/CDVPluginResult.h>

@implementation AppVersion

- (void)getVersionNumber:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options {
    NSString* version = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleVersion"];
    NSString* callbackId = [arguments objectAtIndex:0];

    CDVPluginResult* pluginResult = nil;
    NSString* javaScript = nil;

    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:version];
    javaScript = [pluginResult toSuccessCallbackString:callbackId];

    [self writeJavascript:javaScript];
}

@end
