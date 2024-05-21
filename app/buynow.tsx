import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/pants.jpg')} // Replace with your actual image path
        style={styles.image}
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.button} onPress={() => alert('Buy Now button clicked!')}>
        <Text style={styles.buttonText}>BUY NOW</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('bottom')}>
        <Text style={styles.buttonText}>Back to Browse</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Match the background color to your design
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50, // Adjust padding for your design
  },
  image: {
    width: '100%', // Adjust based on your requirements
    height: '80%', // Adjust based on your requirements
    marginBottom: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    marginBottom: 10, // Provide spacing between buttons
  },
  backButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'gray', // Different color to distinguish this button
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default App;
