import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/SmartwardobeLogo.png')} // Make sure this path matches the location of your image file
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>SmartWardrobe</Text>
      <Text style={styles.subtitle}>Bear with us while we generate styles</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('results')}>
        <Text style={styles.buttonText}>View Results</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  logo: {
    width: 400,
    height: 400, 
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  }
});