import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  const csuLogo = {
    uri: "https://pngriver.com/wp-content/uploads/2017/11/d-clipart-pics-Anonymous-Mask-Clipart-PNG-Image-02_1-768x1024.png",
    
  }

  return (
    <View style={styles.container}>
      
      <Image 
        style={styles.localCSULogo}
        source={require('./assets/CSU Logo.png')}
      />
      <Image 
        style={styles.urlCSULogo}
        source={{
          uri: "https://pngriver.com/wp-content/uploads/2017/11/d-clipart-pics-Anonymous-Mask-Clipart-PNG-Image-02_1-768x1024.png"
        }}
      />

      <Image 
      style={styles.stretchLogo}
      source={csuLogo} />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },

  localCSULogo: {
    width: 55,
    height: 65
  },

  urlCSULogo: {
    width: 50,
    height: 50
  },

  stretchLogo: {
    
    height: 200,
    resizeMode: 'center'
  }

});
