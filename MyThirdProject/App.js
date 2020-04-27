import React, {useState} from 'react';
import {Text, Button, View} from 'react-native';

function TV(props) {
  cont [isOff, setIsOff] = useState(true);
return(
  <View>
      {"\n\n\n\n"}
      <Text>
        This is {props.name} TV, and it is {isOff ? "OFF" : "Turned Me On"}
      </Text>
      <Button
        onPress={() => {
          setIsOff(false);
        }}
        disabled={!isOff}
        title={isOff ? "Turn me ON" : "Thank You"}
      />
  </View>
);
}

export default function MultiTVs(){
  return(
    <View>
      <TV name = "LG"/>
      <TV name = "Sony"/>
      </View>
  );
}

