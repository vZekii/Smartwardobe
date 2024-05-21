import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
    const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.scanAgainButton} onPress={() => navigation.navigate('camera')}>
        <Text style={styles.scanAgainText}>Scan Again</Text>
      </TouchableOpacity>
      <Image
        source={require('../assets/images/Shirtforscan.png')}
        style={styles.mainImage}
        resizeMode="contain"
      />
      <Text style={styles.resultText}>Results: Shirt</Text>
      <Text style={styles.categoryText}>Bottoms</Text>
      <ScrollView horizontal={true} style={styles.horizontalScroll}>
        {/* Repeat this View for each image */}
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/pants.jpg')} style={styles.categoryImage} />
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/pants.jpg')} style={styles.categoryImage} />
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/pants.jpg')} style={styles.categoryImage} />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.viewMoreButton} onPress={() => navigation.navigate('bottom')}>
        <Text style={styles.viewMoreText}>View More</Text>
      </TouchableOpacity>
      
      <Text style={styles.categoryText}>Overtop</Text>
      <ScrollView horizontal={true} style={styles.horizontalScroll}>
        {/* Repeat this View for each image */}
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/jacket.jpg')} style={styles.categoryImage} />
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/jacket.jpg')} style={styles.categoryImage} />
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/jacket.jpg')} style={styles.categoryImage} />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.viewMoreButton}>
        <Text style={styles.viewMoreText}>View More</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.customizeFilterButton}>
        <Text style={styles.customizeFilterText}>Customize Filter</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Changed background color to black
  },
  scanAgainButton: {
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
  },
  scanAgainText: {
    color: 'black',
    fontSize: 16,
  },
  mainImage: {
    width: '100%',
    height: 200,
    marginVertical: 20,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Ensuring text is visible on a black background
    textAlign: 'center',
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white', // Ensuring text is visible on a black background
    marginLeft: 10,
    marginTop: 10,
  },
  horizontalScroll: {
    paddingLeft: 10,
  },
  imageContainer: {
    marginRight: 10,
  },
  categoryImage: {
    width: 100,
    height: 150,
    borderRadius: 5,
  },
  viewMoreButton: {
    backgroundColor: 'blue',
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  viewMoreText: {
    color: 'white', // Ensuring text is visible on the blue background
    fontSize: 16,
  },
  customizeFilterButton: {
    backgroundColor: 'blue',
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  customizeFilterText: {
    color: 'white', // Ensuring text is visible on the blue background
    fontSize: 16,
  }
});

export default App;
