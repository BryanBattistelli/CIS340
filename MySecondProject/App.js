import React from 'react';
import {Text, View, TextInput } from 'react-native';

function MyApp() {

  return (
    <View>
      <Text>
        {"\n\n\n\n\n"}
      Hello, I am a student in CIS 340! {"\n"}
      My full name is {getFullName("Bryan", "Neil", "Battistelli")} {"\n"}
       I have a {pet}!
       </Text>
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
      <Text> Welcome to My Class </Text>
      <MyApp />
      <MyApp />
      <MyApp />
      <MyApp />
      </View>
    )
}
