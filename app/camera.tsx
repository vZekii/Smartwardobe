import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
    
      <ImageBackground 
        source={require('../assets/images/SHIRT.png')} // Update with the path to your image
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={{ marginBottom: 50, backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
        onPress={() => navigation.navigate('happy')}>
            <Text style={styles.buttonText}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginBottom: 50, backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
            <Text style={styles.buttonText}>Choose From Gallery</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'Black', // Set background color or make it transparent
  },
  backText: {
    position: 'absolute',
    top: 40,
    left: 20,
    fontSize: 18,
    color: '#000', // Adjust the color to fit your theme
  },
  image: {
    width: '100%',
    height: '80%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  buttonContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }
});

export default App;
