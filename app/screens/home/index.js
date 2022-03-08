import React from 'react';
import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

function Home({navigation}) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../assets/backgroundLeaves.jpg')}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/logoEMU.png')}></Image>
        <Text>Emergency Alert Management System </Text>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Calculator')}>
        <Text style={styles.buttonText}>Go to Calculator</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Registration')}>
        <Text style={styles.buttonText}>Register Yourself</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Planets')}>
        <Text style={styles.buttonText}>List of Planets</Text>
      </TouchableOpacity>

      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

export default Home;
