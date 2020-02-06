import {Navigation} from 'react-native-navigation';

export const goLogin = () => Navigation.setRoot(returnNavigationObject('Login'));
export const goJoinUs = () => Navigation.setRoot(returnNavigationObject('JoinUs'));
export const goHome = () => Navigation.setRoot(returnNavigationObject('Home'));
export const goScreenTest = () => Navigation.setRoot(returnNavigationObject('ScreenTest'));

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
