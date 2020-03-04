import React from 'react';
import {ActivityIndicator, Image, StyleSheet, TextInput, View} from 'react-native';
import {Button, Header, Text} from 'react-native-elements';
import DeviceProvider from '../providers/DeviceProvider';
import DeviceTesterProvider from '../providers/DeviceTesterProvider';
import ConnectedScreen from './ConnectedScreen';
import PropTypes from 'prop-types';
import SellProvider from '../providers/SellProvider';
import AlertProvider from '../providers/AlertProvider';
import {goHome} from '../navigation/Navigation';

class CreateSellScreen extends ConnectedScreen {
    constructor() {
        super();

        this.state = {
            imageUri: '',
            description: '',
            price: 0,
        }
    }

    componentDidMount(): void {
        DeviceProvider.getDeviceImage().then((url) => {
            this.setState({
                imageUri: url
            });
        });

        this.setState({
           price: this.props.price === undefined ? 600 : this.props.price
        });
    }

    createSell() {
        const { price, description } = this.state;
        const result = DeviceTesterProvider.getResultData();
        const deviceInfos = DeviceProvider.getDeviceInfo();
        const provider = new SellProvider();

        provider.createSell(deviceInfos, result, price, description).then((e) => {
            AlertProvider.success('Well done, your device is now on sale 😉', () => {goHome()})
        }).catch((e) => {
            AlertProvider.error('An error occured');
        });
    }

    render() {
        const { imageUri, price, description } = this.state;

        const brand = DeviceProvider.getBrand();
        const model = DeviceProvider.getModel();
        const capacity = DeviceProvider.getCapacity();
        const testCount = DeviceTesterProvider.getTestCount();
        const testsPassed = DeviceTesterProvider.getNumberOfTestsPassed();

        return (
            <View style={{flex: 1}}>
                { super.render() }
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
                                value={description}
                                onChangeText={(description) => this.setState({description})}
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
                                value={price.toString()}
                                onChangeText={(newText) => this.setState({ price: newText })}
                            >
                            </TextInput>
                        </View>
                        <View />
                    </View>

                    <Button
                        title="Create"
                        buttonStyle={{height: 70, paddingBottom: 20}}
                        onPress={() => this.createSell()}
                    >

                    </Button>
                </View>
            </View>
        )
    }
}

CreateSellScreen.propTypes = {
    price: PropTypes.number.isRequired
};

CreateSellScreen.defaultProps = {
    price: 600
};

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
