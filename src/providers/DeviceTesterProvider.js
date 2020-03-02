import {
    goBluetoothTest,
    goCameraTest, goGpsTest,
    goMultiTouch,
    goScreenTest,
    goTorchTest, goVibrationTest,
    goWifiTest,
} from '../navigation/Navigation';

class DeviceTesterProvider {
    constructor() {
        this.reset();
    }

    reset() {
        this.actual = 0;

        this.navigationList= [
            { next: goScreenTest, feature: 'screen', default: []},
            { next: goMultiTouch, feature: 'multitouch', default: false},
            { next: goTorchTest, feature: 'torch', default: false},
            { next: goWifiTest, feature: 'wifi', default: false},
            { next: goBluetoothTest, feature: 'bluetooth', default: false},
            { next: goCameraTest, feature: 'camera', default: {front: false, back: false}},
            { next: goVibrationTest, feature: 'vibrator', default: false},
            { next: goGpsTest, feature: 'gps', default: false}
        ];

        this.deviceState = {};

        this.navigationList.forEach(el => {
           this.deviceState[el.feature] = el.default;
        });
    }

    goToNextScreen(result) {
        const nextNavigation = this.navigationList[this.actual];

        if (this.actual > 0) {
            const actualNavigation = this.navigationList[this.actual - 1];
            this.deviceState[actualNavigation.feature] = result;

            console.log(this.deviceState);
        }

        nextNavigation.next();

        this.actual += 1;
    }
}

export default new DeviceTesterProvider();
