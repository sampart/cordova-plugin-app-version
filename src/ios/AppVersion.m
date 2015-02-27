#import "AppVersion.h"
#import <Cordova/CDVPluginResult.h>

@implementation AppVersion

- (void)getVersionNumber:(CDVInvokedUrlCommand*)command
{
    
    CDVPluginResult* pluginResult = nil;
    
    NSString* version = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleShortVersionString"];
    if (version == nil)
    {
        NSLog(@"CFBundleShortVersionString was nil, attempting CFBundleVersion");
        version = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleVersion"];
        if (version == nil)
        {
            NSLog(@"CFBundleVersion was also nil, giving up");
            pluginResult = [CDVPluginResult resultWithStatus: CDVCommandStatus_ERROR];
        }
    }
    
    if (pluginResult == nil)
    {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:version];
    }
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
