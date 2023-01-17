import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import {Activity, Location, SensorMenu, Sleep} from './sensorMenu';
const RealTimeStack = createNativeStackNavigator();

const RealTimeTab = () => {
  return (
    <RealTimeStack.Navigator screenOptions={{headerShown: false}}>
      <RealTimeStack.Screen name="sensorMenu" component={SensorMenu} />
      <RealTimeStack.Screen name="activity" component={Activity} />
      <RealTimeStack.Screen name="sleep" component={Sleep} />
      <RealTimeStack.Screen name="location" component={Location} />
    </RealTimeStack.Navigator>
  );
};

export default RealTimeTab;
