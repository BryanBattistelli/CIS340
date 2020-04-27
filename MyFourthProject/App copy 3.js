import React from 'react';
import { Text, Image, ScrollView } from 'react-native';

const dog = {
  //uri = //input url here
  width: 64,
  height: 64
}

export default function MyScrollViewApp() {

  
  return (
    <ScrollView>
      <Text style={{fontSize: 80}}> Try to Scroll Down </Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style={{fontSize: 80}}> Try to Scroll Down again if you'd like </Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style={{fontSize: 80}}> Try to Scroll Down again if you'd like </Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style={{fontSize: 80}}> Try to Scroll Down again if you'd like </Text>
    </ScrollView>



  );
  }

