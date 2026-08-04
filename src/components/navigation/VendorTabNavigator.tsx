import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../screens/vendorTabs/Home';
import Explore from '../../screens/vendorTabs/Explore';
import Plus from '../../screens/vendorTabs/Plus';
import Messages from '../../screens/vendorTabs/Messages';
import Profile from '../../screens/vendorTabs/Profile';
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
