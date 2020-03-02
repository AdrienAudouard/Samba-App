import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import ScreenTester from '../../widgets/ScreenTester';
import DeviceTesterProvider from '../../providers/DeviceTesterProvider';

class ScreenTestScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lowPartValid: false,
            upPartValid: false,
        }
    }

    makeLowPartValid() {
        this.setState({
            lowPartValid: true
        })
    }

    makeUpperPartValid() {
        DeviceTesterProvider.goToNextScreen([]);
    }

    render() {
        const { lowPartValid } = this.state;
        return(
                <View style={styles.container}>
                    {
                        !lowPartValid ?
                            <View style={styles.titleColumn} >
                                <Text h4 style={styles.textCenter}>Slide your finger on the lower part of the screen</Text>
                            </View>
                            :
                            <ScreenTester
                                style={styles.squareContainer}
                                onAllSquareValid={() => this.makeUpperPartValid()}
                            />
                    }
                    {
                        lowPartValid ?
                            <View style={styles.titleColumn} >
                                <Text h4 style={styles.textCenter}>Slide your finger on the upper part of the screen</Text>
                            </View>
                            :
                            <ScreenTester
                                style={styles.squareContainer}
                                onAllSquareValid={() => this.makeLowPartValid()}
                            />
                    }


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    textCenter: {
        textAlign: 'center'
    },
    titleColumn: {
        flex: 1,
        margin: 50,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    squareContainer: {
        flex: 1,
        flexDirection: 'row',
    },

});

export default ScreenTestScreen;
