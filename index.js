/**
 * @format
 */

import {Navigation} from "react-native-navigation";
import {registerScreens} from './src/navigation/Screen';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'Home',
            }
        }
    })
});
