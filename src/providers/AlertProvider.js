import {Alert} from 'react-native';

export default class AlertProvider {
    static error(msg) {
        // Works on both Android and iOS
        Alert.alert(
            'Error',
            msg,
            [
                {text: 'OK'},
            ],
            {cancelable: false},
        );
    }
}
