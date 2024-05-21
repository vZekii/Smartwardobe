import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function App() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/images/WalkingGuy.jpg')} 
        resizeMode="cover" 
        style={styles.image}
        imageStyle={{ opacity: 0.7 }} // Optionally set the image opacity to blend with the background
      >
        <View style={styles.textContainer}>
          <Text style={styles.header}>Get Ready To Become Fashioninstas</Text>
          <Text style={styles.subHeader}>Smart Wardrobe is an app that helps you effortlessly style outfits by suggesting fashionable combinations from your existing wardrobe or in your favorite stores.</Text>
        </View>
        <TouchableOpacity style={{ marginBottom: 50, backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
        onPress={() => navigation.navigate('camera')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Set the background color to black
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'transparent', // Ensure text background is transparent
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20, // Add some margin to the bottom of the sub-header
  },
  button: {
    backgroundColor: '#0000ff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default App;
