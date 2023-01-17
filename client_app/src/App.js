/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RealTimeTab from './views/realtime';
import SummaryTab from './views/summary';
import SuggestionsTab from './views/suggestions';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'My sensors') {
              iconName = focused ? 'radio' : 'radio-outline';
            } else if (route.name === 'My summary') {
              iconName = focused ? 'bar-chart' : 'bar-chart-outline';
            } else if (route.name === 'My suggestions') {
              iconName = focused ? 'happy' : 'happy-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="My sensors" component={RealTimeTab} />
        <Tab.Screen name="My summary" component={SummaryTab} />
        <Tab.Screen name="My suggestions" component={SuggestionsTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
