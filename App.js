// Import the screens
import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import Chat from './components/Chat';
// Import React Navigation
import { createStackNavigator, StackNavigator } from 'react-navigation'; 

export class HomeScreen extends Component {

    render() {
        return (
            <View style={{
            flex: 1,
            flexDirection: 'column',
            }}> 
            <View style={{
                flex: 1,
                backgroundColor: '#4885ed',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 36, color: 'white' }}>
                Chatster!
                </Text>
                <TouchableHighlight style={{ 
                                            margin: 20, 
                                            width: 200, 
                                            height: 45,
                                            backgroundColor: 'darkblue',
                                            padding: 10,
                                            alignItems: 'center',
                                         }}
                    onPress={() => {this.props.navigation.navigate('Login');                                             
                    }}>
                    <Text style={{color: 'white', fontSize: 18}}>Hello!</Text>
                </TouchableHighlight>
            </View>
        </View>);
    }
}

// Create the navigator
const navigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen},
  Login: { screen: Login },
  CreateAccount: { screen: CreateAccount },
  Chat: { screen: Chat },
});

// Export it as the root component
export default navigator

//Credit for this app goes to the following creators:
//•	MaxCh’s Chat Application with Avatar: https://snack.expo.io/@maxch/simple-chat-with-avatar
//•	Aman Mittal: https://blog.jscrambler.com/build-a-chat-app-with-firebase-and-react-native/
//•	Evan Bacon: https://blog.expo.io/how-to-build-a-chat-app-with-react-native-3ef8604ebb3c

// Notes for package.json: react-navigation's version MUST be 2.3.1 in order for you to switch between screens, unless a better solution is provided. And ALWAYS have react-native-gifted-chat's version set to "latest", unless you think of a better version of gifted chat to use!

