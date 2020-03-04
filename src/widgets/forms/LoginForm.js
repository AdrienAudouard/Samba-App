import React from 'react';
import {Button, Text} from 'react-native-elements';
import {Keyboard, SafeAreaView, StyleSheet, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import {goHome, goJoinUs} from '../../navigation/Navigation';
import RoundTextInput from '../RoundTextInput';
import UserProvider from '../../providers/UserProvider';
import AlertProvider from '../../providers/AlertProvider';
import PropTypes from 'prop-types';
import LoginModal from '../modals/LoginModal';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            isLoading: false,
        };

        this.provider = new UserProvider();
    }

    onEmailChange(value) {
        this.setState({
            email: value
        });
    }

    onPasswordChange(value) {
        this.setState({
            password: value
        });
    }

    onLogin() {
        const { email, password } = this.state;
        const { onLogin } = this.props;

        this.setState({
            isLoading: true,
        });

        this.provider.login(email, password).then((response) => {
            onLogin();
        }).catch((e) => {
            AlertProvider.error("Error when login");
        }).finally(() => {
            this.setState({
                isLoading: false,
            });
        });
    }

    render() {
        const { email, password, isLoading } = this.state;
        const { onRegister } = this.props;
        return (
            <SafeAreaView style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.viewContainer}>
                        <View>
                            <Text h1 style={styles.title}>Samba</Text>
                            <Text h3 style={styles.title}>Log in</Text>
                        </View>
                        <View style={styles.formView}>
                            <RoundTextInput
                                placeholder="Email or pseudo"
                                autoCompleteType="username"
                                autoCorrect={false}
                                editable={!isLoading}
                                autoCapitalize="none"
                                onChangeText={text => this.onEmailChange(text)}
                                value={email}
                            />
                            <RoundTextInput
                                placeholder="Password"
                                autoCompleteType="password"
                                textContentType="password"
                                editable={!isLoading}
                                secureTextEntry={true}
                                autoCorrect={false}
                                onChangeText={text => this.onPasswordChange(text)}
                                value={password}
                            />
                            <View></View>
                            <Button
                                buttonStyle={styles.loginButton}
                                title="Log in"
                                loading={isLoading}
                                disabled={isLoading}
                                onPress={() => this.onLogin()}
                            />

                            <Button
                                buttonStyle={styles.joinUsButton}
                                title="Join us"
                                disabled={isLoading}
                                onPress={() => onRegister()}
                            />
                        </View>
                        <View></View>
                    </View>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        );
    }
}

LoginForm.propTypes = {
    onRegister: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EDEDEA',
        flex: 1,
    },
    viewContainer: {
        backgroundColor: '#EDEDEA',
        margin: 30,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    loginButton: {
        backgroundColor: '#2ecc71',
        borderRadius: 20,
        height: 45,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    joinUsButton: {
        backgroundColor: '#3498db',
        borderRadius: 20,
        height: 45,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
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
    formView: {
        height: 330,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    title: {
        textAlign: 'center',
    },
});

export default LoginForm;
