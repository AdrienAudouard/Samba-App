import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import DeviceTesterProvider from '../../providers/DeviceTesterProvider';

class QualityTestScreen extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props);

        const { title, image, buttons } = this.props;
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.viewContainer}>
                    <Text h4 style={styles.textCenter}>
                        { title }
                    </Text>
                    <Image
                        style={{width: 100, height: 100}}
                        source={image}
                    />
                    <View style={styles.buttonListView}>
                        { buttons.map(el => this.buildButton(el.title, el.value)) }
                    </View>
                </View>
            </SafeAreaView>
        );
    }

    buildButton(title, value) {
        return (
            <Button
                key={title}
                buttonStyle={styles.responseButton}
                titleStyle={{color: '#34495e'}}
                title={title}
                onPress={() => DeviceTesterProvider.goToNextScreen(value)}
            />
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
    responseButton: {
        backgroundColor: 'white',
        borderColor: '#34495e',
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

export default QualityTestScreen;
