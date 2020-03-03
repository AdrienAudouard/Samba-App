import {
    goBluetoothTest, goButtonTest, goCameraTest,
    goDeviceAspectScreen, goGpsTest,
    goMultiTouch,
    goScreenAspectScreen,
    goScreenTest,
    goTorchTest, goVibrationTest, goWifiTest,
} from '../navigation/Navigation';

const FEATURES_LIST = [
    { screen: goScreenAspectScreen,
        name: 'screenState',
        default: 0,
        expected: 3,
        label: 'Screen aspect'
    },
    { screen: goDeviceAspectScreen,
        name: 'shellState',
        default: 0,
        expected: 3,
        label: 'Body aspect'
    },
    { screen: goScreenTest,
        name: 'screen',
        default: [],
        expected: [],
        label: 'Screen test'
    },
    { screen: goMultiTouch,
        name: 'multitouch',
        default: false,
        expected: true,
        label: 'Multitouch'
    },
    { screen: goTorchTest,
        name: 'torch',
        default: false,
        expected: true,
        label: 'Torch'
    },
    { screen: goWifiTest,
        name: 'wifi',
        default: false,
        expected: true,
        label: 'Wifi'
    },
    { screen: goBluetoothTest,
        name: 'bluetooth',
        default: false,
        expected: true,
        label: 'Bluetooth'
    },
    { screen: goCameraTest,
        name: 'camera',
        default: {front: false, back: false},
        expected: {front: true, back: true},
        labels: {front: 'Front camera', back: 'Back camera'}
    },
    { screen: goVibrationTest,
        name: 'vibrator',
        default: false,
        expected: true,
        label: 'Vibrator'
    },
    { screen: goGpsTest,
        name: 'gps',
        default: false,
        expected: true,
        label: 'GPS'
    },
    { screen: goButtonTest,
        name: 'button',
        default: { volumeUp: false, volumeDown: false, volumeSwitch: false, power: false},
        expected: { volumeUp: true, volumeDown: true, volumeSwitch: true, power: true},
        labels: { volumeUp: 'Volume up button', volumeDown: 'Volume down button', volumeSwitch: 'Silent switch', power: 'Power button' }
    }
];

export default FEATURES_LIST;
