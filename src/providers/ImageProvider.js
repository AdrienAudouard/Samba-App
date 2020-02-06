import axios from 'axios';
import ENV from '../utils/env';

class ImageProvider {
    getImageFromKeyword(keyword) {
        const url = `https://api.qwant.com/api/search/images?count=1&q=${keyword}&t=images&imagetype=transparent&safesearch=1&locale=fr_FR&uiv=4`;

        return new Promise(((resolve, reject) => {
            axios.get(`${url}`).then((response) => {
                resolve(response.data.data.result.items[0].media);
            }).catch(e => {
                reject(e);
            })
        }));
    }
}

export default new ImageProvider();
