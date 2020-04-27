import React from 'react';
import {Text, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text>Hello, My Name is {props.name}, I am a student in CIS340!</Text>
    </View>
  );
}

export default function MultiComp(){
  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text> Welcome to CIS340 </Text>
      <Student name = "Bryan Battistelli"/>
      <Student name = "Alice Johnson"/>
      <Student name = "John Clark"/>
      <Student name = "Bob Harman"/>
      </View>
  );
}
