import React from 'react';
import { View, Text, Image } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import CustomButton from '@/components/CustomButton';
import { detectImage } from './api';



export default function Generating() {

  const params = useLocalSearchParams();
  const photo = params.photo;
  const gender = params.gender;

  const [isLoading, setIsLoading] = React.useState(false);
  const [prediction, setPrediction] = React.useState(null);
  const [reccomended_types, SetReccomendedTypes] = React.useState([]); // ['coat_jacket', 'sweater', 'tshirt', 'shirt', 'jeans']
  const [color, setColor] = React.useState('black'); 
  const [error, setError] = React.useState<string | null>(null);

  
  const detect = async () => {
    setIsLoading(true);
    setError(null); // Reset the error state
  
    try {
      const data = await detectImage(photo, gender);
      console.log('Success:', data);
      setPrediction(data.predictions);
      SetReccomendedTypes(data.reccomended_types);
      setColor(data.color);
      console.log(data.color)
      // Fix this to pass down colour
    } catch (error) {
      console.error('Error:', error);
    }
  
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

      {!error && <CustomButton
        title="View Results"
        handlePress={() => router.push({pathname: "/results", params: {photo: photo, prediction: prediction, gender: gender, reccomended_types: reccomended_types, color: color}})}
        containerStyles="mx-8 mt-12"
        isLoading={isLoading}
        /> }

      {error && <Text className='text-red-500 text-center text-base font-pregular'>Failed to reach server. Please try again</Text>}

      
    </View>
  );
};