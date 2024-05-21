import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();

  const pantsData = [
    { id: '1', image: require('../assets/images/pants.jpg') },
    { id: '2', image: require('../assets/images/pants.jpg') },
    { id: '3', image: require('../assets/images/pants.jpg') },
    { id: '4', image: require('../assets/images/pants.jpg') },
    { id: '5', image: require('../assets/images/pants.jpg') },
    { id: '6', image: require('../assets/images/pants.jpg') },
  ];

  const renderItem = ({ item, index }) => {
    if (index === 0) {
      return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('buynow')}>
          <Image source={item.image} style={styles.itemImage} />
        </TouchableOpacity>
      );
    } else {
      return (
        <View style={styles.itemContainer}>
          <Image source={item.image} style={styles.itemImage} />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('results')}>
        <Text style={styles.backButtonText}>Back to Result</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Bottom's</Text>
      <FlatList
        data={pantsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 50,
  },
  backButton: {
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'blue',
    alignSelf: 'center',
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  listContent: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  itemContainer: {
    margin: 10,
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 5,
  },
  itemImage: {
    width: 150,
    height: 200,
  },
});
