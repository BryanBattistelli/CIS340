import React from 'react';
import { Text, Image, ScrollView } from 'react-native';

export default function WordConverter() {

  const [text, setText]=useState('');
  return (
    <View style={{padding: 40}}>
     <TextInput 
     style = {{height: 40}}
     placeholder="Input your text here"
     onChangeText={texxt => setText(text)}
     defaultValue={text}
     />

     <Text style={{padding: 10, fontSize: 42}}>
       {text.split(' ').map((word) => word && '*').join(' ')}
     </Text>

    </View>
  );
  }

