import React from 'react';
import {Image, Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import { Text} from 'react-native-elements';
import { RNCamera } from 'react-native-camera';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import YesNoButtons from '../YesNoButtons';

class CameraModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showCamera: true,
            pictureUri: null
        }
    }

    render() {
        const { show, frontCamera, onPictureTaken } = this.props;
        const { showCamera, pictureUri } = this.state;

        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={show}>
                {
                    showCamera
                        ?
                        <View style={styles.container}>
                            <RNCamera
                                ref={ref => {
                                    this.camera = ref;
                                }}
                                style={styles.container}
                                type={ frontCamera ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back}
                                androidCameraPermissionOptions={{
                                    title: 'Permission to use camera',
                                    message: 'We need your permission to use your camera',
                                    buttonPositive: 'Ok',
                                    buttonNegative: 'Cancel',
                                }}
                            />
                            <TouchableOpacity
                                style={styles.takePictureButton}
                                onPress={() => this.takePicture()}
                            >
                                <Image
                                    source={require('../../../assets/rec.png')}
                                    style={{width: 85, height: 85}}
                                />
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={styles.viewContainer}>
                            <Text h4 style={styles.textCenter}>
                                Is this picture ok ?
                            </Text>

                            <Image
                                style={styles.preview}
                                source={{uri: pictureUri}}
                            />
                            <YesNoButtons
                                onNo={() => onPictureTaken(false)}
                                onYes={() => onPictureTaken(true)}
                            />
                        </View>
                }
            </Modal>
        );
    }

    takePicture = async() => {
        if (this.camera) {
            const options = { quality: 1, base64: true };
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);
            this.setState({
                showCamera: false,
                pictureUri: data.uri
            })
            //this.props.onPictureTaken(data.uri);
        }
    };
}

CameraModal.propTypes = {
    frontCamera: PropTypes.bool.isRequired,
    show: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    onPictureTaken: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    takePictureButton: {
        width: 85,
        height: 85,
        position: 'absolute',
        bottom: 50,
        left: Dimensions.get('window').width / 2 - 85 / 2
    },
    textCenter: {
        textAlign: 'center',
        margin: 50
    },
    preview: {
        width: 250,
        height: 400,
    },
});

export default CameraModal;
