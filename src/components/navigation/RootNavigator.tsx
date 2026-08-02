import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from '../../screens/auth/WelcomePage';
import LoginPage from '../../screens/auth/LoginPage';
import TabNavigator from './TabNavigator';

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false, // We're using our custom immersive Screen setup
        animation: 'none', // Disables push/pop animations globally
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomePage} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Main" component={TabNavigator} />
    </Stack.Navigator>
  );
}
