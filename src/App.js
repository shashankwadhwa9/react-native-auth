import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Header, Button, Spinner, CardSection } from './components/common';
import {
    firebaseApiKey,
    firebaseAuthDomain,
    firebaseDatabaseURL,
    firebaseProjectId,
    firebaseStorageBucket,
    firebaseMessagingSenderId
} from './settings.json';
import { LoginForm } from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: firebaseApiKey,
            authDomain: firebaseAuthDomain,
            databaseURL: firebaseDatabaseURL,
            projectId: firebaseProjectId,
            storageBucket: firebaseStorageBucket,
            messagingSenderId: firebaseMessagingSenderId
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button>
                        Logout
                    </Button>
                );

            case false:
                return <LoginForm />;

            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <CardSection>
                    {this.renderContent()}
                </CardSection>
            </View>
        );
    }
}

export default App;
