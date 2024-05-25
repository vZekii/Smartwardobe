import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';
import React from 'react';
import { View, Text, Image } from 'react-native';


export default function Profile() {

  return (
    <View className='flex-1 bg-background'>
      <Image source={require('../assets/images/WalkingGuy.jpg')} className="contain w-full h-[450px] rounded-3xl" />
        <View >
          <Text className='text-center text-white text-2xl m-8 font-psemibold'>Get Ready To Become Fashioninstas</Text>
          <Text className='text-center text-gray-500 mx-8 text-lg'>Smart Wardrobe is an app that helps you effortlessly style outfits by suggesting fashionable combinations from your existing wardrobe or in your favorite stores.</Text>
          <CustomButton 
            title="Get Started" 
            handlePress={() => {router.push("\camera")}} 
            containerStyles="mx-8 mt-8" 
          />
        </View>
    </View>
  );
};

