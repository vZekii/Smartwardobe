import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { fetchItems } from './api';

export default function ProductList() {
  const params = useLocalSearchParams();
  const gender = params.gender;
  const clothing_type = params.clothing_type;
  const colors = params.colors;

  const items_per_page = 5;

  const [totalResults, setTotalResults] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [totalPages, setTotalPages] = React.useState(1);
  const [currentPage, setCurrentPage] = React.useState(1);

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
  
  // Use all colours for now
  const colours = "black,dark_gray,light_gray,white,light_red,dark_red,orange,yellow,light_green,dark_green,light_blue,dark_blue,purple,pink,brown,beige";

  // Load the items
  React.useEffect(() => {
    loadItems(1, clothing_type);
  }, []);

  // Load the items from the API
  const loadItems = async (page, clothing_type) => {
    setLoading(true);
    try {
      const data = await fetchItems(page, clothing_type, colours, gender);
      setTotalPages(data.count / items_per_page);
      setTotalResults(data.count);
      setItems(prevItems => [...prevItems, ...data.results]);
      setCurrentPage(prevPage => prevPage + 1); // Increment the current page
    } catch (error) {
      console.error("Error loading items:", error);
    }
    setLoading(false);
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity className='rounded-2xl p-2 bg-primary m-2' onPress={() => router.push({pathname: 
        "/buynow", params: {
          brand: item.brand,
          name: item.product_name,
          image_url: item.image_url,
          purchase_link: item.purchase_link
        }
      })}>
        <Image source={{uri: item.image_url}} className='w-[160px] h-[300px] rounded-xl' />
      </TouchableOpacity>
    );
  };

  return (
    <View className='bg-background flex-1 pt-12'>
      <Text className='text-white text-center text-2xl font-psemibold'>{type_text_conversion[clothing_type]}</Text>
      <Text className='text-white text-center text-base font-pregular pb-2'>Showing {items.length} of {totalResults} results</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.picture_id.toString()}
        numColumns={2}
        className="m-auto"
        onEndReached={() => {
          if (currentPage <= totalPages) {
            loadItems(currentPage, clothing_type);
          }
        }}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};