package com.samba;

import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.ninty.system.setting.SystemSettingPackage;
import com.cubicphuse.RCTTorch.RCTTorchPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;
import java.util.Arrays;
import java.util.List;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;
import com.ninty.system.setting.SystemSettingPackage;
import org.reactnative.camera.RNCameraPackage;
import com.reactnativecommunity.geolocation.GeolocationPackage;

public class MainApplication extends NavigationApplication {
    @Override
    protected ReactGateway createReactGateway() {
        ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
            @Override
            protected String getJSMainModuleName() {
                return "index";
            }
        };
        return new ReactGateway(this, isDebug(), host);
    }

    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    protected List<ReactPackage> getPackages() {
        // Add additional packages you require here
        // No need to add RnnPackage and MainReactPackage
        return Arrays.<ReactPackage>asList(
                new RNDeviceInfo(),
                new VectorIconsPackage(),
                new SystemSettingPackage(),
                new RNCameraPackage(),
                new GeolocationPackage()
        );
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return getPackages();
    }
}
