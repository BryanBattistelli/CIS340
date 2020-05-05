import React from 'react';
import {View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, height: 50, backgroundColor: 'red'}} />
      <View style={{flex: 2, height: 100, backgroundColor: 'yellow'}} />
      <View style={{flex: 3, height: 100, backgroundColor: 'blue'}}/>
    </View>
  );
}


