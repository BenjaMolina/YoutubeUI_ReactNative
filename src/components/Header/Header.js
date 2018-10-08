import  React, {Component }  from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './styles';

class Header extends Component {
    render() {

        const image = require('../../imgs/youtube-logo.png');
        
        return(
            <View style={styles.header}>
                <Image
                    source={image}
                    style={styles.logoyt} 
                />
                <View style={styles.bottomRight}>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="user-circle" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="search" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="camera" size={20} />
                    </TouchableOpacity> 
                </View>
            </View>
        );
    }
}

export default Header