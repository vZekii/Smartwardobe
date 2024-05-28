import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text , Linking} from 'react-native';
import { Link, router, useLocalSearchParams } from 'expo-router';
import CustomButton from '@/components/CustomButton';


export default function BuyNow() {
  const params = useLocalSearchParams();
  const brand = params.brand;
  const name = params.name;
  const image_url = params.image_url;
  const purchase_link = params.purchase_link;
  
  return (
    <View className='bg-background flex-1 px-4'>
      <Image
        source={{uri: image_url}} // Replace with your actual image path
        className='w-full h-[600px] rounded-xl mt-10 mx-auto'
      />
      <Text className='text-white text-center text-2xl font-psemibold pt-2'>{name}</Text>
      <Text className='text-white text-center text-base font-pregular pb-5'>{brand}</Text>
      <CustomButton
        title="Buy Now"
        handlePress={() => Linking.openURL(purchase_link)}
        containerStyles="mx-8"
        isLoading={false}
        />

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

