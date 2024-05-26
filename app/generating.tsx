import React from 'react';
import { View, Text, Image } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import CustomButton from '@/components/CustomButton';

export default function Generating() {

  const params = useLocalSearchParams();
  const photo = params.photo;

  const [isLoading, setIsLoading] = React.useState(false);
  const [prediction, setPrediction] = React.useState(null);
  const [error, setError] = React.useState<string | null>(null);


  const detect = async () => {
    setIsLoading(true);
    setError(null); // Reset the error state

    let formData: FormData = new FormData();

    const headers = new Headers();
    headers.set('Content-Type', 'multipart/form-data');

    // Append the photo to the form data
    formData.append('image', {
      uri: photo,
      type: 'image/jpeg', // or your image type
      name: 'photo.jpg', // or your image name
    });

    // Call the API to generate styles
    await fetch('https://colt-great-poorly.ngrok-free.app/predict/', {
      method: 'POST',
      body: formData,
      headers: headers
    })
      .then(response => {
        console.log('Response:', response);
        if (response.status !== 200) {
          //setError('Failed to generate styles');
          throw new Error('Failed to generate styles');
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        setPrediction(data.predictions)
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

      {!error && <CustomButton
        title="View Results"
        handlePress={() => router.push({pathname: "/results", params: {photo: photo, prediction: prediction}})}
        containerStyles="mx-8 mt-12"
        isLoading={isLoading}
        /> }

      {error && <Text className='text-red-500 text-center text-base font-pregular'>Failed to reach server. Please try again</Text>}

      
    </View>
  );
};