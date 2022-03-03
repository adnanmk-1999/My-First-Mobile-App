import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CalculatorScreen from '../screens/calculator/index';
import WelcomeScreen from '../screens/home/index';
import RegisterForm from '../screens/registerForm/index';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="Calculator" component={CalculatorScreen} />
        <Stack.Screen name="Registration" component={RegisterForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default Routes;