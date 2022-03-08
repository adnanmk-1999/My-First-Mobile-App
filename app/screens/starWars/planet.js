import React from 'react';
import {Text, View} from 'react-native';


function Planet(props) {
    return (
      <View>
        <Text>{props.planet.name}</Text>
        <Text>Population - {props.planet.population}</Text>
        <Text>Terrain - {props.planet.terrain}</Text>
      </View>
    );
}

export default Planet;