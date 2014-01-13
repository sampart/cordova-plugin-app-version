package uk.co.whiteoctober.cordova;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import android.content.pm.PackageManager.NameNotFoundException;
import android.content.pm.PackageManager;

public class AppVersion extends Plugin {

	@Override
	public PluginResult execute(String arg0, JSONArray arg1, String arg2) {

		try {
			PackageManager packageManager = this.cordova.getActivity().getPackageManager();
			return new PluginResult(PluginResult.Status.OK, packageManager.getPackageInfo(this.cordova.getActivity().getPackageName(), 0).versionName);
		} catch (NameNotFoundException e) {
			return new PluginResult(PluginResult.Status.ERROR, "");
		}
	}

}
