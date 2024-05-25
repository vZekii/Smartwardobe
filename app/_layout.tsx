import React, { useEffect } from 'react';
import { Slot, SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  // Load the fonts
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  // Use effects are used when the page is loading
  useEffect (() => {
    if (error) throw error;
    // Show the splash screen when the fonts are loaded
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])

  if (!fontsLoaded && !error) return null;

  return (
    <Stack> 
      <Stack.Screen name="index" options={{headerShown:false}}/>
      <Stack.Screen name="profile" options={{headerShown:false}}/>
      <Stack.Screen name="camera" options={{headerShown:false}}/>
      <Stack.Screen name="happy" options={{headerShown:false}}/>
      <Stack.Screen name="generating" options={{headerShown:false}}/>
      <Stack.Screen name="results" options={{headerShown:false}}/>
    </Stack>
  )

};



