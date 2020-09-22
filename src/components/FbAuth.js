import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Card, CardSection, ErrorText, Spinner } from './common';
import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk';
import firebase from 'firebase';

class FbAuth extends Component {
    state = { error: '', loading: false, logged: null };
    
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyClmcCGdtvj3iv-fUnE5OLG0XWP2LC8CCQ',
            authDomain: 'authentication-91df5.firebaseapp.com',
            databaseURL: 'https://authentication-91df5.firebaseio.com',
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ logged: true })
            } else {
                this.setState({ logged: false })
            }
        });
    }

    _fbAuth() {
        this.setState({ loading: true, error: '' });
        LoginManager.logInWithReadPermissions(['public_profile', 'email']).then((result) => {
            if (result.isCancelled) {
                this.setState({ error: 'Login through Facebook', loading: false })
            } else {
                AccessToken.getCurrentAccessToken().then((accessTokenData) => {
                    const credential = firebase.auth.FacebookAuthProvider.credential(accessTokenData.accessToken)
                    firebase.auth().signInWithCredential(credential).then((result) => {
                    
                    })
                })
            }
        });
    }

    renderContent(){
        switch(this.state.logged) {
            case true: 
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Logout
                    </Button>
                    );
            case false:
                return (
                    <Button onPress={this._fbAuth.bind(this)} >
                        Login with Facebook
                    </Button>
                    );
            default:
                return <Spinner />
        }
    }

    render() {
        return (
            <Card>
                <ErrorText errorText={this.state.error} />
                {this.renderContent()} 
            </Card>
        );
    }
}


export default FbAuth;
