import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import AnimatedCircle from '../../widgets/AnimatedCircle';
import DeviceTesterProvider from '../../providers/DeviceTesterProvider';

class MultiTouchScreenTest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            circles: []
        }
    }

    onTouchScreen(nbTouch) {
        if (nbTouch > 1) {
            DeviceTesterProvider.goToNextScreen(true);
        }
    }

    onShouldSetResponder(evt) {
        if (evt.nativeEvent.touches) {
            this.setState({
                circles: evt.nativeEvent.touches.map(el => {
                    return {x: el.pageX, y: el.pageY}
                })
            });

            this.onTouchScreen(evt.nativeEvent.touches.length);
        }
        return true;
    }

    onResponderRelease() {
        this.setState({
            circles: []
        });
    }

    render() {
        const { circles } = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.viewContainer}
                      onMoveShouldSetResponder={(evt) => this.onShouldSetResponder(evt)}
                      onStartShouldSetResponder={(evt) => this.onShouldSetResponder(evt)}
                      onResponderMove={(evt) => this.onShouldSetResponder(evt)}
                      onResponderRelease={() => this.onResponderRelease()}
                >
                    { circles.map((el, index) => {
                        return (
                            <AnimatedCircle key={index} style={{    position: 'absolute',
                                top: el.y - 80,
                                left: el.x - 80
                            }} />
                        )
                    }) }
                    <Text h4 style={styles.textCenter}>Please put two fingers on the screen </Text>

                    <Image
                        style={{width: 100, height: 100}}
                        source={require('../../../assets/finger.png')}
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
    textCenter: {
        textAlign: 'center',
        margin: 50
    },
    viewContainer: {
        flex: 1,
        margin: 30,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
});


export default MultiTouchScreenTest;
