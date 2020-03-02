import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import DeviceTesterProvider from '../../providers/DeviceTesterProvider';
import DeviceProvider from '../../providers/DeviceProvider';

class BluetoothTestScreen extends React.Component {
    constructor(props) {
        super(props);

        this.noButtonTimeout = null;
        this.state = {
            noButton: false
        }
    }

    componentDidMount(): void {
        DeviceProvider.addBluetoothStateChangeListener((value) => {
            if (value) {
                DeviceTesterProvider.goToNextScreen(true);
            }
        });

        this.noButtonTimeout = setTimeout(() => {
            this.setState({
                noButton: true
            });
        }, 5000);
    }

    render() {
        const { noButton } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.viewContainer}>
                    <Text h4 style={styles.textCenter}>
                        Please turn the Bluetooth on !
                    </Text>
                    <Image
                        style={{width: 100, height: 100}}
                        source={require('../../../assets/bluetooth.png')}
                    />
                    <Button
                        buttonStyle={styles.myDeviceButton}
                        title="Turn on bluetooth !"
                        onPress={() => DeviceProvider.turnOnBluetooth()}
                    />
                    {
                        noButton ?
                            <Button
                                buttonStyle={styles.noButton}
                                title="I can't turn on my Bluetooth"
                                titleStyle={{color: '#e74c3c'}}
                                onPress={() => DeviceTesterProvider.goToNextScreen(false)}
                            />
                            :

                            <View />
                    }
                </View>
            </SafeAreaView>
        );
    }

    componentWillUnmount(): void {
        clearTimeout(this.noButtonTimeout);
        DeviceProvider.removeBluetoothStateChangeListener();
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
    noButton: {
        backgroundColor: 'white',
        borderColor: '#e74c3c',
        borderWidth: 2,
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

export default BluetoothTestScreen;
