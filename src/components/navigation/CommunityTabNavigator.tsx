import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../screens/communityTabs/Home';
import Explore from '../../screens/communityTabs/Explore';
import Plus from '../../screens/communityTabs/Plus';
import Messages from '../../screens/communityTabs/Messages';
import Profile from '../../screens/communityTabs/Profile';
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
