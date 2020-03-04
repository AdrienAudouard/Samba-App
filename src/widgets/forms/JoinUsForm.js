import React from 'react';
import {Button, Text} from 'react-native-elements';
import {Keyboard, SafeAreaView, StyleSheet, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import RoundTextInput from '../../widgets/RoundTextInput';
import UserProvider from '../../providers/UserProvider';
import AlertProvider from '../../providers/AlertProvider';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';

class JoinUsForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            lastName: '',
            firstName: '',
            pseudo: '',
            password: '',
            isLoading: false,
        };

        this.userProvider = new UserProvider();
    }

    onChange(item, value) {
        this.setState({
            [item]: value,
        });
    }

    signUp() {
        const {email, password, firstName, lastName, pseudo} = this.state;
        const { onLogin } = this.props;

        this.onChange('isLoading', true);

        this.userProvider.signUp(email, password, firstName, lastName, pseudo)
            .then((response) => {
                onLogin();
            })
            .catch((error) => {
                AlertProvider.error('Error when joining us');
            })
            .finally(() => {
                this.onChange('isLoading', false);
            });
    }

    render() {
        const {email, password, firstName, lastName, pseudo, isLoading} = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.viewContainer}>
                        <View>
                            <Text h1 style={styles.title}>Samba</Text>
                            <Text h3 style={styles.title}>Join us</Text>
                        </View>
                        <View style={styles.formView}>
                            <RoundTextInput
                                placeholder="First name"
                                maxLength={40}
                                editable={!isLoading}
                                autoCorrect={false}
                                onChangeText={text => this.onChange('firstName', text)}
                                value={firstName}
                            />
                            <RoundTextInput
                                placeholder="Last name"
                                autoCorrect={false}
                                editable={!isLoading}
                                maxLength={40}
                                onChangeText={text => this.onChange('lastName', text)}
                                value={lastName}
                            />
                            <RoundTextInput
                                placeholder="Pseudo (optional)"
                                autoCompleteType="username"
                                autoCorrect={false}
                                editable={!isLoading}
                                maxLength={40}
                                onChangeText={text => this.onChange('pseudo', text)}
                                value={pseudo}
                            />
                            <RoundTextInput
                                placeholder="Email"
                                autoCompleteType="email"
                                autoCorrect={false}
                                editable={!isLoading}
                                maxLength={40}
                                onChangeText={text => this.onChange('email', text)}
                                value={email}
                            />
                            <RoundTextInput
                                placeholder="Password"
                                autoCompleteType="password"
                                secureTextEntry={true}
                                autoCorrect={false}
                                editable={!isLoading}
                                maxLength={40}
                                onChangeText={text => this.onChange('password', text)}
                                value={password}
                            />
                            <View></View>

                            <Button
                                buttonStyle={styles.joinUsButton}
                                title="Join us"
                                loading={isLoading}
                                onPress={() => this.signUp()}
                            />
                        </View>
                        <View></View>
                    </View>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        );
    }
}

JoinUsForm.propTypes = {
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
        justifyContent: 'space-around',
    },
    loginButton: {
        backgroundColor: '#2ecc71',
        borderRadius: 20,
        height: 45,
        shadowColor: '#000',
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
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    formView: {
        height: 500,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    title: {
        textAlign: 'center',
    },
});

export default JoinUsForm;
