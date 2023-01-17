import React from 'react';
import {Button} from '@rneui/base';
import {View, Text} from 'react-native';

export const SensorMenu = ({navigation}) => {
  return (
    <View style={{}}>
      <Button
        title={'Activity'}
        onPress={() => {
          navigation.navigate('activity');
        }}
      />
      <Button
        title={'Location'}
        onPress={() => {
          navigation.navigate('location');
        }}
      />
      <Button
        title={'Sleep'}
        onPress={() => {
          navigation.navigate('sleep');
        }}
      />
    </View>
  );
};

export const Activity = () => {
  return (
    <View style={{}}>
      <Text>Accelerometer</Text>
    </View>
  );
};

export const Sleep = () => {
  return (
    <View style={{}}>
      <Text>Microphone</Text>
    </View>
  );
};

export const Location = () => {
  return (
    <View style={{}}>
      <Text>Location</Text>
    </View>
  );
};
