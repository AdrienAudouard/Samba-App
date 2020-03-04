import {AsyncStorage} from 'react-native';

class AuthProvider {
    constructor() {
        this.token = undefined;

        AsyncStorage.getItem('token').then((token) => {
            if (token !== null) {
               this.token = token;
           }
        });
    }

    setToken(token) {
        this.token = token;
        return AsyncStorage.setItem('token', token);
    }

    isConnected() {
        return this.token !== undefined;
    }
}

export default new AuthProvider();
