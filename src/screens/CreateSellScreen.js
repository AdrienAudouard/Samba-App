import React from 'react';
import {ActivityIndicator, Image, StyleSheet, TextInput, View} from 'react-native';
import {Button, Header, Text} from 'react-native-elements';
import DeviceProvider from '../providers/DeviceProvider';
import DeviceTesterProvider from '../providers/DeviceTesterProvider';

class CreateSellScreen extends React.Component {
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
        const testCount = DeviceTesterProvider.getTestCount();
        const testsPassed = DeviceTesterProvider.getNumberOfTestsPassed();

        return (
            <View style={{flex: 1}}>
                <Header
                    centerComponent={{ text: 'Sell your device', style: { color: '#fff' } }}
                />
                <View style={styles.container}>
                    <View style={{flex: 1, justifyContent: 'space-between'}}>
                        <View style={{height: 250, alignItems: 'center',justifyContent: 'space-around', backgroundColor: 'white', flexDirection: 'column'}}>
                            <View style={{width: 150}}>
                                <Image
                                    source={{ uri: imageUri }}
                                    resizeMode={'contain'}
                                    style={{ width: 150, height: 150 }}
                                    PlaceholderContent={<ActivityIndicator />}
                                />
                            </View>
                            <View style={{justifyContent: 'space-between', flexDirection: 'column', height: 60}}>
                                <Text style={styles.title}>{ brand } { model }</Text>
                                <Text style={styles.subtitle}>{ capacity }</Text>
                            </View>
                        </View>
                        <View style={styles.resultRow}>
                            <View style={styles.resultSubRow}>
                                <View>
                                    <Image
                                        style={{width: 20, height: 20}}
                                        source={require('../../assets/correct.png')}
                                    />
                                </View>
                                <Text style={{marginLeft: 10, fontSize: 16, textAlign: 'center'}}>Your phone passed { testsPassed } / {testCount} tests</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor: 'white', height: 200, padding: 10}}>
                            <Text>Description</Text>
                            <TextInput
                                multiline
                                placeholder={"ex: iPhone 11 Pro Max"}
                                numberOfLines={6}
                                style={{fontSize: 16}}
                            >
                            </TextInput>
                        </View>
                        <View style={{backgroundColor: 'white', height: 60, padding: 10}}>
                            <Text>Price</Text>
                            <TextInput
                                placeholder={"600 €"}
                                keyboardType={"numeric"}
                                style={{fontSize: 16}}
                            >
                            </TextInput>
                        </View>
                        <View />
                    </View>

                    <Button
                        title="Create"
                        buttonStyle={{height: 70, paddingBottom: 20}}
                    >

                    </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e1e7eb',
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    viewContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center'
    },
    resultRow: {
        height: 60,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: 'white'
    },
    resultSubRow: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
});

export default CreateSellScreen;
