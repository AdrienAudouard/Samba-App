import DeviceInfo from 'react-native-device-info';
import ImageProvider from './ImageProvider';

class DeviceProvider {
    getBrand() {
        return DeviceInfo.getBrand();
    }

    getModel() {
        return DeviceInfo.getModel();
    }

    getDeviceImage() {
        const model = DeviceInfo.getModel();

        return ImageProvider.getImageFromKeyword(`${model}`);
    }

    getCapacity() {
        return this.bytesToSize(DeviceInfo.getTotalDiskCapacitySync() + DeviceInfo.getTotalMemorySync());
    }

    bytesToSize(bytes) {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes === 0) return '0 Byte';
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        console.log(bytes / Math.pow(1024, i));
        return Math.ceil(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    }

    getOs() {
        const osName = DeviceInfo.getSystemName();
        const os = DeviceInfo.getSystemVersion();

        return `${osName} ${os}`;
    }
}

export default new DeviceProvider();
