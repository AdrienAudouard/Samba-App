import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import DeviceProvider from '../../providers/DeviceProvider';
import { RNCamera } from 'react-native-camera';
import CameraModal from '../../widgets/modals/CameraModal';
import DeviceTesterProvider from '../../providers/DeviceTesterProvider';

class CameraTestScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            takeBack: false,
            takeFront: false,
            result: { front: false, back: false }
        };

    }

    componentDidMount(): void {

    }

    onBothPicturesTaken() {
        const { result } = this.state;
        DeviceTesterProvider.goToNextScreen(result);
    }

    render() {
        const { takeBack, takeFront, result } = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.viewContainer}>
                    <Text h4 style={styles.textCenter}>
                        Please take a picture !
                    </Text>
                    <CameraModal
                        show={takeBack && !takeFront}
                        frontCamera={false}
                        onCancel={() => {}}
                        onPictureTaken={(res) => {
                            this.setState({
                                takeFront: true,
                                result: { front: false, back: res }
                            });
                        }}
                    />
                    <CameraModal
                        show={takeFront}
                        frontCamera={true}
                        onCancel={() => {}}
                        onPictureTaken={(res) => {
                            this.setState({
                                result: { front: res, back: result.back }
                            }, () => {
                                this.onBothPicturesTaken();
                            });
                        }}
                    />
                    <Image
                        style={{width: 100, height: 100}}
                        source={require('../../../assets/photo-camera.png')}
                    />
                    <Button
                        buttonStyle={styles.takePictureButton}
                        title="Take a picture !"
                        onPress={() => this.setState({takeBack: true})}
                    />
                </View>
            </SafeAreaView>
        );
    }

    componentWillUnmount(): void {

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewContainer: {
        margin: 30,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    textCenter: {
        textAlign: 'center',
        margin: 50
    },
    takePictureButton: {
        backgroundColor: '#2ecc71',
        borderRadius: 20,
        height: 45,
        minWidth: 300,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    }
});

export default CameraTestScreen;
