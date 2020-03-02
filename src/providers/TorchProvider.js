import Torch from 'react-native-torch';
import { Platform } from 'react-native';

class TorchProvider {
    async turnOn() {
        if (Platform.OS === 'ios') {
            return Torch.switchState(true);
        } else {
            const cameraAllowed = await Torch.requestCameraPermission(
                'Camera Permissions', // dialog title
                'We require camera permissions to use the torch on the back of your phone.' // dialog body
            );

            if (cameraAllowed) {
                return Torch.switchState(true);
            }
        }
    }

    async turnOff() {
        if (Platform.OS === 'ios') {
            return Torch.switchState(false);
        } else {
            const cameraAllowed = await Torch.requestCameraPermission(
                'Camera Permissions', // dialog title
                'We require camera permissions to use the torch on the back of your phone.' // dialog body
            );

            if (cameraAllowed) {
                return Torch.switchState(false);
            }
        }
    }
}

export default TorchProvider;
