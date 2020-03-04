import HttpClient from './HttpClient';
import ENV from '../utils/env';

class SellProvider {
    createSell(deviceInfos, result, price, description) {
        const data = {
            title: `${deviceInfos.brand} ${deviceInfos.model} ${deviceInfos.storage}`,
            description,
            price,
            productSpecifications: { ...deviceInfos, ...result }
        };

        return HttpClient.post(ENV.PRODUCT, data)
    }
}

export default SellProvider;
