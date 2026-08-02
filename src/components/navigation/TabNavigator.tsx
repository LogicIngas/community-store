import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home as HomeIcon, Compass, PlusSquare, MessageCircle, User } from 'lucide-react-native';

import Home from '../../screens/tabs/Home';
import Explore from '../../screens/tabs/Explore';
import Plus from '../../screens/tabs/Plus';
import Messages from '../../screens/tabs/Messages';
import Account from '../../screens/tabs/Account';
import { Colors } from '../../theme';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.secondaryText,
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ color, size }) => <HomeIcon color={color} size={size} />
        }}
      />
      <Tab.Screen 
        name="Explore" 
        component={Explore} 
        options={{
          tabBarIcon: ({ color, size }) => <Compass color={color} size={size} />
        }}
      />
      <Tab.Screen 
        name="Plus" 
        component={Plus} 
        options={{
          tabBarIcon: ({ color, size }) => <PlusSquare color={color} size={size} />
        }}
      />
      <Tab.Screen 
        name="Messages" 
        component={Messages} 
        options={{
          tabBarIcon: ({ color, size }) => <MessageCircle color={color} size={size} />
        }}
      />
      <Tab.Screen 
        name="Account" 
        component={Account} 
        options={{
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  );
}
