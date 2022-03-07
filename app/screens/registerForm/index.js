import React, {useState} from 'react';
import Axios from 'axios';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';

import styles from './styles';

import validation from '../../helpers/validator/validation';
import validate from '../../helpers/validator/validationWrapper';

function RegisterForm() {
  const [userDetails, setUserDetails] = useState({
    name: '',
    username: '',
    password: '',
    email: '',
    contact: '',
    gender: 'Male',
  });

  const [error, setError] = useState({
    emailError: ''
  })

  var genders = [
    {label: 'Male', value: 0},
    {label: 'Female', value: 1},
    {label: 'Others', value: 2},
  ];

  async function handleSubmit() {
    console.log('Hello');
    Axios.post('http://192.168.1.6:4010/users/register', userDetails)
      .then(response => {
        console.log(response.data);
        Alert.alert("Success", response.data.message);
      })
      .catch(error => {
        console.log(error.response.data);
        Alert.alert('Error', error.response.data.message); //=> response payload
      });
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.headingLayout}>
            <View style={styles.headingContainer}>
              <Text style={styles.headingText}>Fill your details</Text>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              data-name="name"
              placeholder="Name"
              onChangeText={data =>
                setUserDetails({...userDetails, name: data})
              }
              underlineColorAndroid={'transparent'}></TextInput>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="Username"
              onChangeText={data =>
                setUserDetails({...userDetails, username: data})
              }
              underlineColorAndroid={'transparent'}></TextInput>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="Email"
              onChangeText={data =>
                setUserDetails({...userDetails, email: data})
              }
              onBlur={() => {
                setError({
                  emailError: validate('email', userDetails.email),
                });
              }}
              underlineColorAndroid={'transparent'}></TextInput>
            <Text>{error.emailError}</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="Contact"
              onChangeText={data =>
                setUserDetails({...userDetails, contact: data})
              }
              keyboardType="numeric"
              underlineColorAndroid={'transparent'}></TextInput>
          </View>

          <View style={styles.inputContainer}></View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={data =>
                setUserDetails({...userDetails, password: data})
              }
              underlineColorAndroid={'transparent'}></TextInput>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>{JSON.stringify(userDetails, null, 5)}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default RegisterForm;
