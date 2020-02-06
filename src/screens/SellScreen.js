import React from 'react';
import {ActivityIndicator, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import DeviceProvider from '../providers/DeviceProvider';
import {goScreenTest} from '../navigation/Navigation';

class SellScreen extends React.Component {
    constructor() {
        super();

        this.state = {
            imageUri: ''
        }
    }

    componentDidMount(): void {
        DeviceProvider.getDeviceImage().then((url) => {
            console.log(url);
            this.setState({
                imageUri: url
            });
        });
    }

    render() {
        const { imageUri } = this.state;

        const brand = DeviceProvider.getBrand();
        const model = DeviceProvider.getModel();
        const os = DeviceProvider.getOs();
        const capacity = DeviceProvider.getCapacity();

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.viewContainer}>
                    <Text h3 style={styles.textCenter}>Sell your device</Text>
                    <Image
                        source={{ uri: imageUri }}
                        resizeMode={'contain'}
                        style={{ width: 250, height: 250 }}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                    <Text h4 style={styles.textCenter}>{ brand }</Text>
                    <Text h4 style={styles.textCenter}>{ model }</Text>
                    <Text h5 style={styles.textCenter}>{ capacity }</Text>
                    <Text h5 style={styles.textCenter}>{ os }</Text>
                    <Button
                        buttonStyle={styles.myDeviceButton}
                        title="That's my device !"
                        onPress={() => goScreenTest()}
                    />
                    <Button
                        buttonStyle={styles.notMyDeviceButton}
                        title="I can't find my device 😞"
                    />
                </View>
            </SafeAreaView>
        )
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
        textAlign: 'center'
    },
    notMyDeviceButton: {
        backgroundColor: '#34495e',
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

export default SellScreen;
