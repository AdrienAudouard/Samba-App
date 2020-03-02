import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import TorchProvider from '../../providers/TorchProvider';
import YesNoButtons from '../../widgets/YesNoButtons';
import DeviceTesterProvider from '../../providers/DeviceTesterProvider';

class TorcheTestScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            flashOn: false
        };

        this.torchProvider = new TorchProvider();
    }

    turnOnFlash() {
        this.torchProvider.turnOn().then(() =>
            this.setState({
                flashOn: true
            })
        )
    }

    componentWillUnmount(): void {
        this.torchProvider.turnOff();
    }

    render() {
        const { flashOn } = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.viewContainer}>
                    <Text h4 style={styles.textCenter}>
                        { flashOn ? "Is the torch on ?" : "Please turn the torch on !"}
                    </Text>
                    <Image
                        style={{width: 100, height: 100}}
                        source={require('../../../assets/flashlight.png')}
                    />
                    {
                        flashOn ?
                            <YesNoButtons
                                onNo={() => DeviceTesterProvider.goToNextScreen(false)}
                                onYes={() => DeviceTesterProvider.goToNextScreen(true)}
                            />
                            :
                            <Button
                                buttonStyle={styles.myDeviceButton}
                                title="Turn on the flash"
                                onPress={() => this.turnOnFlash()}
                            />

                    }
                </View>
            </SafeAreaView>
        );
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
    myDeviceButton: {
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
    },
});


export default TorcheTestScreen;
