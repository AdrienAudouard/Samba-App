import React from 'react';
import LoginModal from '../widgets/modals/LoginModal';

class ConnectedScreen extends React.Component {
    constructor() {
        super();

        this.state = {
        }
    }

    render() {
        return (
            <LoginModal onClose={() => {}} />
        )
    }
}

export default ConnectedScreen;
