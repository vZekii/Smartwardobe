import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import CustomButton from '@/components/CustomButton';
import { fetchItems } from './api';
import { Picture } from './types';

export default function Results() {
    const params = useLocalSearchParams();
    const photo = params.photo;
    const prediction = params.prediction?.toString();
    console.log(prediction)
    const gender = params.gender;
    const reccomended_types = params.reccomended_types.split(',');
    const color = params.color;

    const items_per_page = 5;

    const [items, setItems] = React.useState({});
    const [page, setPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(1);
    const [loading, setLoading] = React.useState({});
    
    const colours = "black,dark_gray,light_gray,white,light_red,dark_red,orange,yellow,light_green,dark_green,light_blue,dark_blue,purple,pink,brown,beige";
    
    // Convert the clothing types from the database to more readable text
    const type_text_conversion = {
      "coat_jacket": "Coat/Jacket",
      "jeans": "Jeans",
      "shirt": "Shirt",
      "pants": "Pants",
      "shorts": "Shorts",
      "sweats_hoods": "Sweats/Hoods",
      "tshirt": "T-Shirt",
      "dress": "Dress",
      "skirt": "Skirt",
    };


    const handleLoadStart = (id) => {
      setLoading(prevState => ({ ...prevState, [id]: true }));
    };

    const handleLoadEnd = (id) => {
      setLoading(prevState => ({ ...prevState, [id]: false }));
    };

    React.useEffect(() => {
      // Load the items when the page loads
      console.log('reccomended_types:', reccomended_types);
      reccomended_types.forEach(clothing_type => {
        loadItems(page, clothing_type);
      });
    }, [page]);
  
    // Load the items from the API
    const loadItems = async (page, clothing_type) => {
      setLoading(true);
      try {
        const data = await fetchItems(page, clothing_type, colours, gender);
        setItems(prevItems => ({ ...prevItems, [clothing_type]: data.results }));
        setTotalPages(data.count / items_per_page);
      } catch (error) {
        console.error("Error loading items:", error);
      }
      setLoading(false);
    };

  return (
    <View
      className='bg-background pt-12 flex-1'>
      
      <FlatList 
        
        data={reccomended_types}
        keyExtractor={(item) => item}
        className=''
        ListHeaderComponent={
        <View>
          <Image
            source={{uri: photo }} // Replace with your image path
            className='w-full h-[350px] rounded-3xl'
            resizeMode="cover"
          />
            <View className='flex flex-row mx-4'>
              <CustomButton
                title="Scan Again"
                handlePress={() => router.push('/camera')}
                containerStyles=" flex-auto m-2 px-4"
              />
              <View className='flex-auto min-h-[62px] justify-center items-center'>
                <Text className='text-white text-lg font-pregular'>Result: {prediction}</Text>
              </View>
            </View>
          </View>
        }
        ListFooterComponent={
          <CustomButton
            title="Filter"
            containerStyles='mt-16'
          />
        }
        renderItem={({ item: clothing_type }) => (
          <View className='px-4'>
            <Text className='text-white text-xl'>{type_text_conversion[clothing_type]}</Text>
            <ScrollView horizontal>
              {items[clothing_type]?.map((item: Picture) => (
                <View key={item.picture_id} className='mr-4'>
                  <Image source={{ uri: item.image_url }} style={styles.categoryImage}/>
                </View>

              ))}
            </ScrollView>
            
            <CustomButton
              title="View More"
              handlePress={() => router.push({pathname: "/productlist", params: {clothing_type: clothing_type, gender: gender, colors: color}})}
              containerStyles="flex-end ml-40 my-2 align-right"
            />
          </View>
        )}
      />
    </View>
    // <ScrollView >
      
    //   <Image
    //     source={{uri: photo }} // Replace with your image path
    //     className='w-full h-[350px] rounded-3xl'
    //     resizeMode="cover"
    //   />
    //   <View className='flex flex-row mx-4'>
    //     <CustomButton
    //       title="Scan Again"
    //       handlePress={() => router.push('/camera')}
    //       containerStyles=" flex-auto m-2 px-4"
    //     />
    //     <View className='flex-auto min-h-[62px] justify-center items-center'>
    //       <Text className='text-white text-lg font-pregular'>Result: {prediction}</Text>
    //     </View>
    //   </View>
    //   {/* <FlatList
    //     data={items}
    //     keyExtractor={(item) => item.picture_id.toString()}
    //     renderItem={renderItem}
    //     horizontal={true}
    //     // onEndReached={loadMore}
    //     //onEndReachedThreshold={0.5}
    //     ListFooterComponent={loading && <Text>Loading...</Text>}
    //   /> */}
    //   <Text style={styles.categoryText}>Bottoms</Text>
    //   {/* <ScrollView horizontal={true} style={styles.horizontalScroll}>
    //     <View style={styles.imageContainer}>
    //       <Image source={require('../assets/images/pants.jpg')} style={styles.categoryImage} />
    //     </View>
    //     <View style={styles.imageContainer}>
    //       <Image source={require('../assets/images/pants.jpg')} style={styles.categoryImage} />
    //     </View>
    //     <View style={styles.imageContainer}>
    //       <Image source={require('../assets/images/pants.jpg')} style={styles.categoryImage} />
    //     </View>
    //   </ScrollView>
    //   <TouchableOpacity style={styles.viewMoreButton} onPress={() => router.push('\bottom')}>
    //     <Text style={styles.viewMoreText}>View More</Text>
    //   </TouchableOpacity> */}
      
    //   <Text style={styles.categoryText}>Overtop</Text>
    //   <ScrollView horizontal={true} style={styles.horizontalScroll}>
    //   {items.map((item) => (
    //     <View key={item.picture_id.toString()} style={styles.imageContainer}>
    //       <Image
    //         source={{ uri: item.image_url }}
    //         style={styles.categoryImage}
    //         onLoadStart={() => handleLoadStart(item.picture_id)}
    //         onLoadEnd={() => handleLoadEnd(item.picture_id)}
    //       />
    //       {loading[item.picture_id] && <ActivityIndicator size="large" color="#0000ff" />}
    //     </View>
    //   ))}
    //   </ScrollView>
    //   <TouchableOpacity style={styles.viewMoreButton}>
    //     <Text style={styles.viewMoreText}>View More</Text>
    //   </TouchableOpacity>
      
    //   <TouchableOpacity style={styles.customizeFilterButton}>
    //     <Text style={styles.customizeFilterText}>Customize Filter</Text>
    //   </TouchableOpacity>
    // </ScrollView>
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
