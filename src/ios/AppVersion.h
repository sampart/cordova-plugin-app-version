#import <Cordova/CDVPlugin.h>

@interface AppVersion : CDVPlugin

- (void)getVersionNumber:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

@end
