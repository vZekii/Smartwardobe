import React from 'react';
import { View, Text, Image } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import CustomButton from '@/components/CustomButton';

export default function Happy() {
    const params = useLocalSearchParams();
    const photo = params.photo;


  return (
    <View className="bg-background flex-1 py-12">
      <Image
        source={{uri: photo }} // Replace with your image path
        className='w-full h-[450px] rounded-3xl'
      />

      <CustomButton 
        title="Scan Again" 
        handlePress={() => router.push('/camera')} 
        containerStyles="mx-8 mt-8"
        />

      <Text className='text-center text-white text-xl m-8 font-psemibold'>Click to Populate Results</Text>

      <View className='flex flex-row justify-center mx-2'>
        <CustomButton 
          title="Male"
          handlePress={() => router.push({pathname: "/generating", params: {photo: photo}})}
          containerStyles="flex-auto m-2 px-4"
          />
        <CustomButton
          title="Female"
          handlePress={() => router.push({pathname: "/generating", params: {photo: photo}})}
          containerStyles="flex-auto m-2 px-4"
          />
        <CustomButton
          title="Unisex"
          handlePress={() => router.push({pathname: "/generating", params: {photo: photo}})}
          containerStyles="flex-auto m-2 px-4"
          />
          </View>

    </View>
  );
};