import axios from 'axios';
import ENV from '../utils/env';

export default class UserProvider {
    signUp(mail, password, firstName, lastName, pseudo) {
        return axios.post(`${ENV.API_PATH}${ENV.SIGN_UP}`, {
            username: `${firstName} ${lastName}`,
            password,
            mail
        });
    }

    login(mail, password) {
        return new Promise(((resolve, reject) => {
            axios.post(`${ENV.API_PATH}${ENV.LOGIN}`, {
                username: mail,
                password,
            }).then((response) => {
                console.log(response.headers["authorization"]);
                resolve();
            }).catch(e => {
                reject(e);
            })
        }));
    }
}
