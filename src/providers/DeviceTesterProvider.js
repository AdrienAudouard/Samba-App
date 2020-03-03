import {
    goBluetoothTest, goButtonTest,
    goCameraTest, goDeviceAspectScreen, goFinalTest, goGpsTest,
    goMultiTouch, goQualityTestScreen, goScreenAspectScreen,
    goScreenTest,
    goTorchTest, goVibrationTest,
    goWifiTest,
} from '../navigation/Navigation';
import FEATURES_LIST from '../models/features';

class DeviceTesterProvider {
    constructor() {
        this.reset();
    }

    reset() {
        this.actual = 0;

        this.navigationList = FEATURES_LIST;

        this.deviceState = {};

        this.navigationList.forEach(el => {
           this.deviceState[el.name] = {result: el.default, expected: el.expected};
        });
    }

    getTestCount() {
        let count = 0;
        Object.keys(this.deviceState).forEach((key) => {
            const feature = this.deviceState[key];

            if ((typeof feature.result) === 'boolean'  || (typeof feature.result) === 'number') {
                count += 1;
            } else if (!Array.isArray(feature.result)) {
                Object.keys(feature.result).forEach((res) => {
                    count += 1;
                });
            } else {
                count += 1;
            }
        });

        return count;
    }

    getNumberOfTestsPassed() {
        let count = 0;

        Object.keys(this.deviceState).forEach((key) => {
            const feature = this.deviceState[key];

            if ((typeof feature.result) === 'boolean' || (typeof feature.result) === 'number') {
                if (feature.result === feature.expected) {
                    count += 1;
                }
            } else if (!Array.isArray(feature.result)) {
                Object.keys(feature.result).forEach((res) => {
                    if (feature.result[res] === feature.expected[res]) {
                        count += 1;
                    }
                });
            }
        });

        return count;
    }

    getResultsWithLabels() {
        const results = [];

        Object.keys(this.deviceState).forEach((key) => {
            const feature = this.deviceState[key];
            const featureDatas = FEATURES_LIST.find((el) => el.name === key);

            if ((typeof feature.result) === 'boolean' || (typeof feature.result) === 'number') {
                results.push({label: featureDatas.label, result: feature.result === feature.expected})
            } else if (!Array.isArray(feature.result)) {
                Object.keys(feature.result).forEach((res) => {
                    results.push({label: featureDatas.labels[res], result: feature.result[res] === feature.expected[res]})
                });
            } else {
                results.push({label: featureDatas.label, result: feature.result === feature.expected})
            }
        });

        return results;

    }


    goToNextScreen(result) {
        const nextNavigation = this.navigationList[this.actual];

        if (this.actual > 0) {
            const actualNavigation = this.navigationList[this.actual - 1];
            this.deviceState[actualNavigation.name] = {result, expected: actualNavigation.expected};
        }

        if (nextNavigation) {
            nextNavigation.screen();

            this.actual += 1;
        } else {
            goFinalTest();
        }
    }
}

export default new DeviceTesterProvider();
