import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SquareTester from './SquareTester';
import PropTypes from 'prop-types';

const GRID_SIZE = 2;

class ScreenTester extends React.Component{
    constructor(props) {
        super(props);

        this.squaresValidated = 0;
    }

    buildColmuns() {
        const rows = [];
        for (let i = 0; i < GRID_SIZE; i++) {
            rows.push(<View style={styles.row}>{this.buildRow()}</View>)
        }

        return rows;
    }

    buildRow() {
        const square = [];

        for (let i = 0; i < GRID_SIZE; i++) {
            square.push(<SquareTester onValidate={() => this.onValidateSquare()} />)
        }

        return square;
    }

    onValidateSquare() {
        this.squaresValidated += 1;

        if (this.squaresValidated >= Math.pow(GRID_SIZE, 2)) {
            this.props.onAllSquareValid();
        }
    }

    render() {
        return (
            <View
                {...this.props}
            >
                { this.buildColmuns() }
            </View>
        );
    }
}

ScreenTester.propTypes = {
    onAllSquareValid: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    row: {
        flex: 1,
    },
    square: {
        flex: 1,
        borderRadius: 5,
        margin: 5,
        backgroundColor: '#ecf0f1',
        borderColor: '#bdc3c7',
        borderWidth: 2,
    }
});

export default ScreenTester;
