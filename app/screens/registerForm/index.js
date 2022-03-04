import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

import styles from './styles';

function RegisterForm() {
  return (
    <View style={styles.container}>

      <View style={styles.headingLayout}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Registration</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Your name"
          underlineColorAndroid={'transparent'}></TextInput>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Your email"
          underlineColorAndroid={'transparent'}></TextInput>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="New password"
          secureTextEntry={true}
          underlineColorAndroid={'transparent'}></TextInput>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Confirm password"
          secureTextEntry={true}
          underlineColorAndroid={'transparent'}></TextInput>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      
    </View>
  );
}

export default RegisterForm;
