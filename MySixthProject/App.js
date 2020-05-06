import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {

  const csuLogo = {
    uri: "https://pngriver.com/wp-content/uploads/2017/11/d-clipart-pics-Anonymous-Mask-Clipart-PNG-Image-02_1-768x1024.png",
    
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={csuLogo} style={styles.Image} />
          <Text style={styles.Text}>Another Image cause cant find png of csu logo!</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  Image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },

  text: {
    color: "red",
    fontSize: 40,
    fontWeight: 'bold'
  },

  stretchLogo: {
    
    height: 200,
    resizeMode: 'center'
  }

});
