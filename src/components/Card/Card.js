import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';

import {styles} from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Card extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    const { description, image, avatar, date, channel } = this.props.video
    return (
        <View style={styles.card}>
            <Image
                style={styles.imageCover}
                source={{uri: image}}
            />
            <View style={styles.footerCard}>
                <Image 
                    style={styles.avatar}
                    source={{uri: avatar}}
                />
                <View style={styles.description}>
                    <Text
                        style={styles.description_title} 
                        numberOfLines={2}
                    >
                        {description}
                    </Text>

                    <Text style={styles.description_channel}>{channel} </Text>

                    <Text style={styles.description_date}>{date}</Text>
                </View>
                <Icon name="ellipsis-v" size={15} style={styles.btnOptions}/>
            </View>
            
        </View>
    );
  }
}