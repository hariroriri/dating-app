import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';
import { Ionicons } from 'react-native-vector-icons';  // Make sure to use correct import
import CustomPunchin from '../screens/CustomPunchin';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        } else if (route.name === 'Messages') {
          iconName = focused ? 'chatbox' : 'chatbox-outline';
        } else if (route.name === 'Punchin') {
          iconName = focused ? 'time' : 'time-outline'; // Using Ionicons time icon for punchin
        }

        // Return the icon component
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',   // Active icon color
      tabBarInactiveTintColor: 'gray',   // Inactive icon color
      headerShown: false
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Messages" component={MessagesScreen} />
    <Tab.Screen name="Punchin" component={CustomPunchin} />
  </Tab.Navigator>
);

export default AppNavigator;
