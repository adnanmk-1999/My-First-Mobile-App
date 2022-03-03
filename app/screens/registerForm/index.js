import React from 'react';
import {Text, TextInput, View} from 'react-native';

import styles from './styles';

function RegisterForm() {
  return (
    <View style={styles.container}>
      <View style={styles.headingLayout}>
          <View style={styles.headingContainer}>
              <Text style={styles.headingText}>Enter your details</Text>
          </View>
        
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Enter Fullname'></TextInput>
      </View>
    </View>
  );
}

export default RegisterForm;
