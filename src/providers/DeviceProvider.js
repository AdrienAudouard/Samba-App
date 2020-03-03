import DeviceInfo from 'react-native-device-info';
import ImageProvider from './ImageProvider';
import SystemSetting from 'react-native-system-setting'
import {Platform, Vibration} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

class DeviceProvider {
    constructor() {
        this.wifiListener = null;
        this.bluetoothListener = null;
        this.volumeTurnUpListener = () => {};
        this.volumeTurnDownListener = () => {};
        this.currentVolume = SystemSetting.getVolume().value;

        this.volumeListener = SystemSetting.addVolumeListener((v) => {
            if (v.value > this.currentVolume) {
                this.volumeTurnUpListener();
            } else {
                this.volumeTurnDownListener();
            }
            this.currentVolume = v.value;
        });
    }

    getBrand() {
        return DeviceInfo.getBrand();
    }

    getModel() {
        return DeviceInfo.getModel();
    }

    getDeviceImage() {
        const model = DeviceInfo.getModel();

        return ImageProvider.getImageFromKeyword(`${model}`);
    }

    getCapacity() {
        return this.bytesToSize(DeviceInfo.getTotalDiskCapacitySync() + DeviceInfo.getTotalMemorySync());
    }

    bytesToSize(bytes) {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes === 0) return '0 Byte';
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        console.log(bytes / Math.pow(1024, i));
        return Math.ceil(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    }

    getOs() {
        const osName = DeviceInfo.getSystemName();
        const os = DeviceInfo.getSystemVersion();

        return `${osName} ${os}`;
    }

    isIOSDevice() {
        return Platform.OS === 'ios';
    }

    addWifiStateChangeListener(listener) {
        this.wifiListener = SystemSetting.addWifiListener(listener);

        this.isWifiOn().then((isOn) => {
            listener(isOn);
        });
    }

    addBluetoothStateChangeListener(listener) {
        this.bluetoothListener = SystemSetting.addBluetoothListener(listener);

        this.isBluetoothOn().then((isOn) => {
            listener(isOn);
        })
    }

    addVolumeTurnUpListener(listener) {
        this.volumeTurnUpListener = listener;
    }

    addVolumeTurnDownListener(listener) {
        this.volumeTurnDownListener = listener;
    }

    removeWifiStateChangeListener() {
/*        if (this.wifiListener) {
            SystemSetting.removeListener(this.wifiListener);
        }*/
    }

    removeBluetoothStateChangeListener() {
/*        if (this.bluetoothListener) {
            SystemSetting.removeListener(this.bluetoothListener);
        }*/
    }

    turnOnWifi() {
        this.isWifiOn().then((isOn) => {
            if (!isOn) {
                SystemSetting.switchWifi();
            }
        });
    }

    turnOnBluetooth() {
        this.isBluetoothOn().then((isOn) => {
            if (!isOn) {
                SystemSetting.switchBluetooth();
            }
        });
    }

    getLocation(callback, err) {
        Geolocation.getCurrentPosition(callback, err);
    }

    unsubscribeLocation() {
        Geolocation.stopObserving();
    }

    makeAVibration() {
        // Vibration patterns are different depending on the platform
        // https://reactnative.dev/docs/vibration
        const PATTERN = this.isIOSDevice() ? [0, 500, 500, 500, 500] : [0, 500, 500, 500, 500, 500];
        Vibration.vibrate(PATTERN);
    }

    isWifiOn() {
        return SystemSetting.isWifiEnabled();
    }

    isBluetoothOn() {
        return SystemSetting.isBluetoothEnabled();
    }

    unsubscribeVolumeListener() {
        SystemSetting.removeVolumeListener(this.volumeListener);
    }
}

export default new DeviceProvider();
