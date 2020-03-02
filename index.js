/**
 * @format
 */

import {Navigation} from "react-native-navigation";
import {registerScreens} from './src/navigation/Screen';
import {
    StatusBar,
} from 'react-native';

registerScreens();

StatusBar.setBarStyle('dark-content');

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'Home',
            }
        }
    })
});
