import React from 'react';
import * as Animatable from 'react-native-animatable';

class AnimatedCircle extends React.Component {
    render() {
        return (
            <Animatable.View animation={bounce} easing="ease-out" iterationCount="infinite" style={{
                ...this.props.style,
                height: 100,
                width: 100,
                opacity: 0.5,
                borderRadius: 50,
                backgroundColor: 'red'
            }} />
        );
    }
}

const bounce = {
    0: {
        scale: 1,
    },
    0.5: {
        scale: 0.8,
    },
    1: {
        scale: 1,
    },
};

export default AnimatedCircle;
