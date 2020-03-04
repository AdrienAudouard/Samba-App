import React from 'react';
import SellScreen from './SellScreen';
import {BottomNavigation} from 'react-native-paper';
import LoginScreen from './LoginScreen';

class HomeScreen extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'home', title: 'Home', icon: 'home'  },
            { key: 'sell', title: 'Sell', icon: 'star' },
            { key: 'profile', title: 'Profile', icon: 'account-group'  },
        ],
    };

    _handleIndexChange = index => this.setState({ index });

    _renderScene = BottomNavigation.SceneMap({
        sell: SellScreen,
        profile: LoginScreen,
        home: LoginScreen
    });

    render() {
        return (
            <BottomNavigation

                navigationState={this.state}
                barStyle={{ backgroundColor: '#EDEDEA' }}
                onIndexChange={this._handleIndexChange}
                renderScene={this._renderScene}
            />
        );
    }
}


export default HomeScreen;
