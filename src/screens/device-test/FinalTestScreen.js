import React from 'react';
import {Image, SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import DeviceTesterProvider from '../../providers/DeviceTesterProvider';
import {goCreateSell} from '../../navigation/Navigation';
import ResultModal from '../../widgets/modals/ResultModal';

class FinalTestScreen extends React.Component {
    constructor() {
        super();

        this.state = {
            showResultModal: false,
        }
    }

    render() {
        const { showResultModal } = this.state;
        const testCount = DeviceTesterProvider.getTestCount();
        const testsPassed = DeviceTesterProvider.getNumberOfTestsPassed();

        return (
            <SafeAreaView style={styles.container}>
                <ResultModal
                    show={showResultModal}
                    onClose={() => {
                        this.setState({showResultModal: false})
                    }}
                />
                <View style={styles.viewContainer}>
                    <Text h3 style={styles.textCenter}>Sell your phone</Text>
                    <View style={styles.buttonListView}>
                        <View style={styles.buttonRow}>
                            <View>
                                <Image
                                    style={{width: 25, height: 25}}
                                    source={require('../../../assets/correct.png')}
                                />
                            </View>
                            <Text style={{marginLeft: 10, fontSize: 20, textAlign: 'center'}}>Your phone passed { testsPassed }/{testCount} tests</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.showResultModal()}>
                            <Text style={{fontSize: 20, color: '#2980b9', textDecorationLine: 'underline'}}>View the result</Text>
                        </TouchableOpacity>
                    </View>
                    <Image
                        style={{width: 100, height: 100}}
                        source={require('../../../assets/satisfied.png')}
                    />
                    <Text style={{fontSize: 20, textAlign: 'center'}}>Your device passed the test very well, after analyzing the score and comparing it to the
                        phones already on sale on our platform, we offer you to sell your phone for:</Text>
                    <Text style={{fontSize: 50, fontWeight: 'bold'}}>600 €</Text>
                    <Button
                        buttonStyle={styles.yesButtons}
                        title="Let's go !"
                        onPress={() => goCreateSell(600)}
                    />
                    <Button
                        buttonStyle={styles.noButton}
                        titleStyle={{color: '#34495e'}}
                        title="Go back to home"
                    />
                </View>
            </SafeAreaView>
        )
    }

    showResultModal() {
        this.setState({showResultModal: false}, () => {
            this.setState({showResultModal: true});
        })
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
    buttonRow: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonListView: {
        height: 100,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    noButton: {
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
    yesButtons: {
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

export default FinalTestScreen;
