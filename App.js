import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboard from './Screens/Onboard';
import Home from './Screens/Home';
import OnBoardHome from './Screens/OnBoardHome';
import EmailLogin from './Screens/EmailLogin';
import Signup from './Screens/Signup';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="onBoard">
        <Stack.Screen name="onBoard" component={Onboard}></Stack.Screen>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="onBoardHome" component={OnBoardHome}></Stack.Screen>
        <Stack.Screen name="emailLogin" component={EmailLogin}></Stack.Screen>
        <Stack.Screen name="signup" component={Signup}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
