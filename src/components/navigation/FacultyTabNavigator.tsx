import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../screens/facultyTabs/Home';
import Explore from '../../screens/facultyTabs/Explore';
import Plus from '../../screens/facultyTabs/Plus';
import Messages from '../../screens/facultyTabs/Messages';
import Profile from '../../screens/facultyTabs/Profile';
import CustomTabBar from './CustomTabBar';

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Plus" component={Plus} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
