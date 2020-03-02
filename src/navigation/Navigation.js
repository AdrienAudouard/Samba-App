import {Navigation} from 'react-native-navigation';

export const goLogin = () => Navigation.setRoot(returnNavigationObject('Login'));
export const goJoinUs = () => Navigation.setRoot(returnNavigationObject('JoinUs'));
export const goHome = () => Navigation.setRoot(returnNavigationObject('Home'));
export const goScreenTest = () => Navigation.setRoot(returnNavigationObject('ScreenTest'));
export const goMultiTouch = () => Navigation.setRoot(returnNavigationObject('MultiTouchTest'));
export const goTorchTest = () => Navigation.setRoot(returnNavigationObject('TorchTest'));
export const goWifiTest = () => Navigation.setRoot(returnNavigationObject('WifiTest'));
export const goBluetoothTest = () => Navigation.setRoot(returnNavigationObject('BluetoothTest'));
export const goCameraTest = () => Navigation.setRoot(returnNavigationObject('CameraTest'));
export const goVibrationTest = () => Navigation.setRoot(returnNavigationObject('VibratorTest'));
export const goGpsTest = () => Navigation.setRoot(returnNavigationObject('GpsTest'));

const returnNavigationObject = screen => ({
    root: {
        stack: {
            id: 'App',
            children: [
                {
                    component: {
                        name: screen,
                        options: {
                            topBar: {
                                visible: false,
                            },
                        },
                    },
                },
            ],
        },
    },
});
