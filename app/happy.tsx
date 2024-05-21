import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/Shirtforscan.png')} // Replace with your image path
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('camera')}>
          <Text style={styles.buttonText}>Scan Again</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.instructionText}>Click to Populate Results</Text>
      <View style={styles.genderButtonContainer}>
        <TouchableOpacity style={styles.genderButton} onPress={() => navigation.navigate('generating')}>
          <Text style={styles.buttonText}>Men</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.genderButton}>
          <Text style={styles.buttonText}>Female</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.genderButton}>
          <Text style={styles.buttonText}>Show All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '80%',
    height: '40%',
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  instructionText: {
    fontSize: 16,
    marginBottom: 10,
  },
  genderButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  genderButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
});
