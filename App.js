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
import Card from './src/components/Card/Card';

export default class App extends Component {

    render() {

        const video = {
            description: 'Fix You - Coldplay (Indian Version) | Tushar Lall | The Indian Jam Primero en todo lo que se puedaasdas asdas ',
            channel: 'Tushar Lail - 0k Views ',
            date: '9 months ago',
            avatar: 'https://kanto.legiaodosherois.com.br/w750-h393-gnw-cfill-q80/wp-content/uploads/2018/08/legiao_hGqnzdI41NOksoAcejtKim0vwZWaPV_guxJ7UFLX56.jpg.jpeg',
            image: 'https://kanto.legiaodosherois.com.br/w750-h393-gnw-cfill-q80/wp-content/uploads/2018/08/legiao_hGqnzdI41NOksoAcejtKim0vwZWaPV_guxJ7UFLX56.jpg.jpeg'
        }

        return ( 
            <View style = { styles.container } >
                <Header />
                <View style={ styles.body }>
                    <Card video={video}/>
                    <Card video={video}/>
                    <Card video={video}/>
                    <Card video={video}/>
                    <Card video={video}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    body: {
        flex: 1,
        backgroundColor: '#c2c4c8',
    },

});