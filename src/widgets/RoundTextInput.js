import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export default function RoundTextInput(props) {
    return (
        <TextInput
            editable={true}
            {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            style={styles.textInput}
            maxLength={40}
        />
    );
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 45,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 7,
        paddingBottom: 7,
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
