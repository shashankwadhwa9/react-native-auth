import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBaifK2FcJzshJ7-rGESH3kuNQ-nwW5ltc',
            authDomain: 'react-native-auth-7f873.firebaseapp.com',
            databaseURL: 'https://react-native-auth-7f873.firebaseio.com',
            projectId: 'react-native-auth-7f873',
            storageBucket: 'react-native-auth-7f873.appspot.com',
            messagingSenderId: '335007083439'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>An app</Text>
            </View>
        );
    }
}

export default App;
