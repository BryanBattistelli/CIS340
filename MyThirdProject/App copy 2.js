import React from 'react';
import {Text, Image, View } from 'react-native';

export default function MyDog() {

  
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image source = "https://cdn.mos.cms.futurecdn.net/BwL2586BtvBPywasXXtzwA-320-80.jpeg"
      style={{width: 200, height: 200}}
      />
      <Text> Hello, this is my dog. </Text>
    </View>
  );
}

