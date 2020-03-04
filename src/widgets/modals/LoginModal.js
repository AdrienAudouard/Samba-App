import React from 'react';
import {
    Modal,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import DeviceTesterProvider from '../../providers/DeviceTesterProvider';
import LoginForm from '../forms/LoginForm';
import JoinUsForm from '../forms/JoinUsForm';
import AuthProvider from '../../providers/AuthProvider';

class LoginModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showLoginForm: true,
            showModal: !AuthProvider.isConnected(),
        }
    }

    onLogin() {
        this.setState({
            showModal: false,
        });
    }

    render() {
        const { show, onClose } = this.props;
        const { showLoginForm, showModal } = this.state;

        return (
            <Modal
                animationType="slide"
                transparent={false}
                onDismiss={() => onClose()}
                onRequestClose={() => onClose()}
                visible={showModal}>
                {
                    showLoginForm ?
                        <LoginForm
                            onRegister={() => this.setState({showLoginForm: false})}
                            onLogin={() => this.onLogin()}
                        />
                        :
                        <JoinUsForm
                            onLogin={() => this.onLogin()}
                        />
                }
            </Modal>
        );
    }
}

LoginModal.propTypes = {
    onClose: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
});

export default LoginModal;
