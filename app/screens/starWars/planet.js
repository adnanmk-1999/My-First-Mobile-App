import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

function Planet(props) {
    return (
      <View style={styles.card}>
        <Text style={styles.cardHeading}>{props.planet.name}</Text>
        <Text>Population - {props.planet.population}</Text>
        <Text>Terrain - {props.planet.terrain}</Text>
      </View>
    );
}

export default Planet;