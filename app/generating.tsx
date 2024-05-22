import React from 'react';
import { View, Text, Image } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import CustomButton from '@/components/CustomButton';

export default function Generating() {

  const params = useLocalSearchParams();
  const photo = params.photo;

  const [isLoading, setIsLoading] = React.useState(false);

  const detect = async () => {
    setIsLoading(true);
    // Call the API to generate styles
    await fetch('http://192.168.20.15:5000/generate-styles', {
      method: 'POST',
      body: JSON.stringify({ photo }),
      headers: {
      'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      
    // await new Promise(resolve => setTimeout(resolve, 3000));
    setIsLoading(false);
  }

  // Try to detect the image when the page loads
  React.useEffect(() => {
    detect();
  }, []);

  return (
    <View className="bg-background flex-1 justify-center">
      <Image
        source={require('../assets/images/SmartwardobeLogo.png')} // Make sure this path matches the location of your image file
        className='w-[400px] h-[400px]'
      />
      <Text className='text-4xl text-white font-psemibold text-center'>SmartWardrobe</Text>
      <Text className='text-white text-center text-base font-pregular'>Bear with us while we generate styles</Text>
      
      <CustomButton
        title="View Results"
        handlePress={() => router.push({pathname: "/results", params: {photo: photo}})}
        containerStyles="mx-8 mt-12"
        isLoading={isLoading}
        />
      
    </View>
  );
};