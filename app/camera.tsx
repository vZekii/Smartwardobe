import React from 'react';
import { Button, View, Text, Image, StyleSheet,  } from 'react-native';

import { CameraCapturedPicture, CameraView, useCameraPermissions } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import CustomButton from '@/components/CustomButton';
import { StatusBar } from 'expo-status-bar';
import { router, useRouter } from 'expo-router';


export default function CameraScreen() {
    const router = useRouter();
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [cameraRef, setCameraRef] = useState<CameraView | null>(null);

    const takePhoto = async () => {
      if (cameraRef) {
        let photo: CameraCapturedPicture | undefined = await (cameraRef as CameraView).takePictureAsync();
        if (photo) {
          console.log(photo);
          router.push({pathname: "/happy", params: {photo: photo.uri}});
        }
      }
    }

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
      });
    
      console.log(result);
    
      if (!result.canceled && result.assets && result.assets.length > 0) {
        router.push({pathname: "/happy", params: {photo: result.assets[0].uri}});
      }
    };

    if (!permission) {
      // Camera permissions are still loading.
      return (
        <View>
          <Text className='text-center text-6xl'>Please allow camera permission</Text>
        </View>
      );
    }

    if (!permission.granted) {
      // Camera permissions are not granted yet.
      return (
        <View style={styles.container}>
          <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
          <Button onPress={requestPermission} title="grant permission" />
        </View>
      );
    }

    function toggleCameraFacing() {
      setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    return (
      <View className='flex-1 py-12 bg-background'>
        <Text className='text-center text-white font-psemibold pb-3 text-lg'>Take a photo of the garment</Text>
        <CameraView className='flex-1' facing={facing} ref={(ref) => setCameraRef(ref)}>
          <View style={styles.buttonContainer}>

            <CustomButton 
              title="Flip Camera" 
              handlePress={toggleCameraFacing} 
              containerStyles="m-2 px-4 py-2"
            />
          </View>
        </CameraView>

        <CustomButton 
          title="Take Photo" 
          handlePress={takePhoto} 
          containerStyles="m-5"
        />
        
        <CustomButton 
          title="Choose from gallery" 
          handlePress={pickImage} 
          containerStyles="m-5 mt-0"
        />
        
        <StatusBar style="light" />

      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'Black', // Set background color or make it transparent
  },
  backText: {
    position: 'absolute',
    top: 40,
    left: 20,
    fontSize: 18,
    color: '#000', // Adjust the color to fit your theme
  },
  image: {
    width: '100%',
    height: '80%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  buttonContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }
});
