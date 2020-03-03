import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import DeviceTesterProvider from '../../providers/DeviceTesterProvider';
import DeviceProvider from '../../providers/DeviceProvider';

class ButtonTestScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = { volumeUp: false, volumeDown: false, volumeSwitch: false, power: false};
    }

    componentDidMount(): void {
        DeviceProvider.addVolumeTurnDownListener(() => {
            this.setState({ volumeDown: true });
        });

        DeviceProvider.addVolumeTurnUpListener(() => {
            this.setState({ volumeUp: true });
        });
    }

    render() {
        const { volumeUp, volumeDown, volumeSwitch, power } = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.viewContainer}>
                    <Text h4 style={styles.textCenter}>
                        Buttons test
                    </Text>
                    <View style={styles.buttonListView}>
                        { this.buildRow(volumeUp, 'Turn up the volume') }
                        { this.buildRow(volumeDown, 'Turn down the volume') }
                        { this.buildRow(power, 'Take a screenshot') }
                        { this.buildRow(volumeSwitch, 'Turn off silent mode') }
                    </View>
                    <Button
                        buttonStyle={styles.noButton}
                        title="Others buttons do not work"
                        titleStyle={{color: '#e74c3c'}}
                        onPress={() => DeviceTesterProvider.goToNextScreen({ volumeUp, volumeDown, volumeSwitch, power })}
                    />
                </View>
            </SafeAreaView>
        );
    }

    buildRow(checked = false, text) {
        return (
            <View style={styles.buttonRow}>
                <View style={{flex: 1}}>
                    <Image
                        style={{width: 25, height: 25}}
                        source={checked ? require('../../../assets/correct.png') : require('../../../assets/minus.png')}
                    />
                </View>
                <Text style={{flex: 2, fontSize: 20}}>{text}</Text>
            </View>
        );
    }

    componentWillUnmount(): void {
        DeviceProvider.unsubscribeVolumeListener();
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
        justifyContent: 'space-around',
    },
    textCenter: {
        textAlign: 'center',
        margin: 50
    },
    buttonListView: {
        height: 300,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    buttonRow: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
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

export default ButtonTestScreen;
