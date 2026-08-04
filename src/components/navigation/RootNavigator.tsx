import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from '../../screens/auth/WelcomePage';
import LoginPage from '../../screens/auth/LoginPage';
import RoleSelection from '../../screens/auth/RoleSelection';
import StudentTabNavigator from './StudentTabNavigator';
import VendorTabNavigator from './VendorTabNavigator';
import CommunityTabNavigator from './CommunityTabNavigator';
import FacultyTabNavigator from './FacultyTabNavigator';

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  RoleSelection: undefined;
  StudentTabs: undefined;
  VendorTabs: undefined;
  CommunityTabs: undefined;
  FacultyTabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomePage} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="RoleSelection" component={RoleSelection} />
      <Stack.Screen name="StudentTabs" component={StudentTabNavigator} />
      <Stack.Screen name="VendorTabs" component={VendorTabNavigator} />
      <Stack.Screen name="CommunityTabs" component={CommunityTabNavigator} />
      <Stack.Screen name="FacultyTabs" component={FacultyTabNavigator} />
    </Stack.Navigator>
  );
}
