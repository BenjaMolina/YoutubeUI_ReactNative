/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Header from './src/components/Header/Header';

export default class App extends Component {
    render() {
        return ( 
            <View style = { styles.container } >
                <Header />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',
        flexDirection: 'column',
    },

});