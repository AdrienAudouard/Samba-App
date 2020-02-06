import LoginScreen from '../screens/LoginScreen';
import {Navigation} from 'react-native-navigation';
import JoinUsScreen from '../screens/JoinUsScreen';
import HomeScreen from '../screens/HomeScreen';
import ScreenTestScreen from '../screens/ScreenTestScreen';

export function registerScreens() {
    Navigation.registerComponent('Login', () => LoginScreen);
    Navigation.registerComponent('JoinUs', () => JoinUsScreen);
    Navigation.registerComponent('Home', () => HomeScreen);
    Navigation.registerComponent('ScreenTest', () => ScreenTestScreen);
}
