import axios from 'axios';
import ENV from '../utils/env';
import AuthProvider from './AuthProvider';

class HttpClient {
    client() {
        if (AuthProvider.isConnected()) {
            return axios.create({
                baseURL: `${ENV.API_PATH}`,
                timeout: 5000,
                headers: {'authorization': AuthProvider.token}
            });
        } else {
            return axios.create({
                baseURL: `${ENV.API_PATH}`,
                timeout: 5000,
            });
        }
    }

    get(url) {
        return this.client().get(url);
    }

    post(url, data) {
        return this.client().post(url, data);
    }
}

export default new HttpClient();
