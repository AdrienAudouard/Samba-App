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
export const goButtonTest = () => Navigation.setRoot(returnNavigationObject('ButtonTest'));
export const goFinalTest = () => Navigation.setRoot(returnNavigationObject('FinalTest'));
export const goQualityTestScreen = () => Navigation.setRoot(returnNavigationObject('QualityTest'));
export const goScreenAspectScreen = () => Navigation.setRoot(returnScreenAspectNavigationObject('QualityTest'));
export const goDeviceAspectScreen = () => Navigation.setRoot(returnDeviceAspectNavigationObject('QualityTest'));
export const goCreateSell = () => Navigation.setRoot(returnNavigationObject('CreateSell'));

const returnDeviceAspectNavigationObject = screen => ({
    root: {
        stack: {
            id: 'App',
            children: [
                {
                    component: {
                        name: screen,
                        passProps: {
                            title: 'How is the body of your device ?',
                            image: require('../../assets/exam.png'),
                            buttons: [
                                { title: 'Perfect', value: 3 },
                                { title: 'Small scratches', value: 2 },
                                { title: 'Big scratches', value: 1 },
                                { title: 'Broken', value: 0 },
                            ]
                        },
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

const returnScreenAspectNavigationObject = screen => ({
    root: {
        stack: {
            id: 'App',
            children: [
                {
                    component: {
                        name: screen,
                        passProps: {
                            title: 'How is your screen ?',
                            image: require('../../assets/exam.png'),
                            buttons: [
                                { title: 'Perfect', value: 3 },
                                { title: 'Small scratches', value: 2 },
                                { title: 'Big scratches', value: 1 },
                                { title: 'Broken', value: 0 },
                            ]
                        },
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
