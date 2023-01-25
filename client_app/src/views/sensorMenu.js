import React, {useEffect, useState} from 'react';
import {Button, Card} from '@rneui/base';
import {View, Text} from 'react-native';
import {
  accelerometer,
  setUpdateIntervalForType,
  SensorTypes,
} from 'react-native-sensors';

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
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);
  const [timestamp, setTimestamp] = useState(0);

  setUpdateIntervalForType(SensorTypes.accelerometer, 400);
  const setValues = () => {
    accelerometer.subscribe(({x, y, z, timestamp}) => {
      setTimestamp(timestamp);
      setX(x);
      setY(y);
      setZ(z);
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setValues();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{}}>
      <Card containerStyle={{marginTop: 15}}>
        <Card.Title>Accelerometer Values</Card.Title>
        <Card.Divider />

        <Text style={{marginBottom: 8, color: 'black'}} h2>
          X: {x}
        </Text>
        <Text style={{marginBottom: 8, color: 'black'}} h2>
          Y: {y}
        </Text>
        <Text style={{marginBottom: 8, color: 'black'}} h2>
          Z: {z}
        </Text>
        <Text style={{marginBottom: 8, color: 'green'}} h3>
          Time: {Date(timestamp)}
        </Text>
      </Card>
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
