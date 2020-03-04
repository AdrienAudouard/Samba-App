import ENV from '../utils/env';
import AuthProvider from './AuthProvider';
import HttpClient from './HttpClient';

export default class UserProvider {
    signUp(mail, password, firstName, lastName, pseudo) {
        return HttpClient.post(`${ENV.SIGN_UP}`, {
            username: `${firstName} ${lastName}`,
            password,
            mail,
            firstName,
            lastName
        }).then(this.login(mail, password));
    }

    login(mail, password) {
        return new Promise(((resolve, reject) => {
            HttpClient.post(`${ENV.LOGIN}`, {
                username: mail,
                password,
            }).then((response) => {
                AuthProvider.setToken(response.headers["authorization"]).then(() => {
                    resolve();
                });
            }).catch(e => {
                reject(e);
            })
        }));
    }
}
