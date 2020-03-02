import LoginScreen from '../screens/LoginScreen';
import {Navigation} from 'react-native-navigation';
import JoinUsScreen from '../screens/JoinUsScreen';
import HomeScreen from '../screens/HomeScreen';
import ScreenTestScreen from '../screens/device-test/ScreenTestScreen';
import MultiTouchScreenTest from '../screens/device-test/MultiTouchScreenTest';
import TorcheTestScreen from '../screens/device-test/TorcheTestScreen';
import WifiTestScreen from '../screens/device-test/WifiTestScreen';
import BluetoothTestScreen from '../screens/device-test/BluetoothTestScreen';
import CameraTestScreen from '../screens/device-test/CameraTestScreen';
import VibrationTestScreen from '../screens/device-test/VibrationTestScreen';
import GpsTestScreen from '../screens/device-test/GpsTestScreen';

export function registerScreens() {
    Navigation.registerComponent('Login', () => LoginScreen);
    Navigation.registerComponent('JoinUs', () => JoinUsScreen);
    Navigation.registerComponent('Home', () => HomeScreen);
    Navigation.registerComponent('ScreenTest', () => ScreenTestScreen);
    Navigation.registerComponent('MultiTouchTest', () => MultiTouchScreenTest);
    Navigation.registerComponent('TorchTest', () => TorcheTestScreen);
    Navigation.registerComponent('WifiTest', () => WifiTestScreen);
    Navigation.registerComponent('BluetoothTest', () => BluetoothTestScreen);
    Navigation.registerComponent('CameraTest', () => CameraTestScreen);
    Navigation.registerComponent('VibratorTest', () => VibrationTestScreen);
    Navigation.registerComponent('GpsTest', () => GpsTestScreen);
}
