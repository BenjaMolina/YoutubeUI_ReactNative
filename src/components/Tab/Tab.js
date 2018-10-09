import React, { Component } from 'react'
import { Text, View } from 'react-native'

import {styles} from './styles';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Tab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconText}>
            <Icon name="md-home" size={25}/>
            <Text style={styles.text_icon}>Inicio</Text>
        </View>
        <View style={styles.iconText}>  
            <Icon name="md-flame" size={25} />
            <Text style={styles.text_icon} >Tendencias</Text>
        </View>
        <View style={styles.iconText}>
            <Icon name="logo-youtube" size={23} />
            <Text style={styles.text_icon} >Suscripciones</Text>
        </View>
        <View style={styles.iconText}>
            <Icon name="ios-chatboxes" size={25} />
            <Text style={styles.text_icon} >Recibidos</Text>
        </View>
        <View style={styles.iconText}>
            <Icon name="md-folder" size={25} />
            <Text style={styles.text_icon} >Biblioteca</Text>
        </View>

      </View>
    )
  }
}