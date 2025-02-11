package com.samba;

import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationActivity;
import java.util.Arrays;
import java.util.List;

import com.learnium.RNDeviceInfo.RNDeviceInfo;

public class MainActivity extends NavigationActivity {

/*  *//**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   *//*
  @Override
  protected String getMainComponentName() {
    return "Samba";
  }*/

    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                new RNDeviceInfo()
        );
    }
}
