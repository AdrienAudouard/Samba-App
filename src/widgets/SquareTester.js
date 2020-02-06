import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import ColorProvider from '../providers/ColorProvider';
import PropTypes from 'prop-types';

class SquareTester extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        };

        this.color = ColorProvider.getRandomColor();
    }

    setClicked() {
        const {clicked} = this.state;

        if (!clicked) {
            this.props.onValidate();
        }

        this.setState({
            clicked: true
        })
    }

    render() {
        const { clicked } = this.state;
        const { color } = this;

        const clickedStyle = {
            flex: 1,
            borderRadius: 5,
            margin: 3,
            backgroundColor: color,
            borderColor: color,
            borderWidth: 2,
        };

        return (
            <TouchableOpacity
                style={ clicked ? clickedStyle : styles.square}
                onPressIn={() => this.setClicked()}
            />
        );
    }
}

SquareTester.propTypes = {
    onValidate: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    square: {
        flex: 1,
        borderRadius: 5,
        margin: 3,
        backgroundColor: '#ecf0f1',
        borderColor: '#bdc3c7',
        borderWidth: 2,
    },
});

export default SquareTester;
