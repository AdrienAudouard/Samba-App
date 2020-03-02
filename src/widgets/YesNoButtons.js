import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';
import PropTypes from 'prop-types';

class YesNoButtons extends React.Component {
    render() {
        return (
            <View style={styles.viewContainer}>
                <Button
                    buttonStyle={styles.noButton}
                    title="No"
                    titleStyle={{color: '#e74c3c'}}
                    onPress={() => this.props.onNo()}
                />
                <Button
                    buttonStyle={styles.yesButton}
                    title="Yes"
                    onPress={() => this.props.onYes()}
                />
            </View>
        );
    }
}

YesNoButtons.propTypes = {
    onYes: PropTypes.func.isRequired,
    onNo: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    viewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        minWidth: 300,
    },
    yesButton: {
        backgroundColor: '#2ecc71',
        borderRadius: 20,
        height: 45,
        minWidth: 120,
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
        minWidth: 120,
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

export default YesNoButtons;
