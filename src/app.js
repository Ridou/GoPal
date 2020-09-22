import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import FbAuth from './components/FbAuth';

class App extends Component {

    render() {
        return (
            <View> 
            	<Header headerText="Facebook Auth"/>
            	<FbAuth />
            </View>
        );
    }
}

export default App;
