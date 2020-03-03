import React from 'react';
import {Image, Modal, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import PropTypes from 'prop-types';
import DeviceTesterProvider from '../../providers/DeviceTesterProvider';

class ResultModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { show, onClose } = this.props;
        const results = DeviceTesterProvider.getResultsWithLabels();

        return (
            <Modal
                animationType="slide"
                transparent={false}
                onDismiss={() => onClose()}
                onRequestClose={() => onClose()}
                presentationStyle={'pageSheet'}
                visible={show}>
                <SafeAreaView style={styles.viewContainer}>
                    <View style={styles.container}>
                        <Text h1>Tests results</Text>
                        <ScrollView style={{flex: 1, marginTop: 20}}>
                            { results.map((row) => this.buildRow(row.label, row.result)) }
                            <Button
                                title="Ok"
                                onPress={() => onClose()}
                                buttonStyle={{height: 50}}
                            />
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </Modal>
        );
    }

    buildRow(label, result) {
        return (
            <View style={{ height: 50, justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text>{ label }</Text>
                <Image
                    style={{width: 25, height: 25}}
                    source={result ? require('../../../assets/correct.png') : require('../../../assets/minus.png')}
                />
            </View>
        )
    }
}

ResultModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        margin: 30
    },
    container: {
        flex: 1,
    },
});

export default ResultModal;
