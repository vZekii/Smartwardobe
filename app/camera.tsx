import React from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CameraCapturedPicture, CameraView, useCameraPermissions } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

// export default function App() {
//     const navigation = useNavigation();
//   return (
//     <View style={styles.container}>
    
//       <ImageBackground 
//         source={require('../assets/images/SHIRT.png')} // Update with the path to your image
//         style={styles.image}
//         resizeMode="cover"
//       >
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={{ marginBottom: 50, backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
//         onPress={() => navigation.navigate('happy')}>
//             <Text style={styles.buttonText}>Take Photo</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={{ marginBottom: 50, backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
//             <Text style={styles.buttonText}>Choose From Gallery</Text>
//           </TouchableOpacity>
//         </View>
//       </ImageBackground>
//     </View>
//   );
// };

export default function CameraScreen() {
    const navigation = useNavigation();
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [cameraRef, setCameraRef] = useState(null);

    const takePhoto = async () => {
      if (cameraRef) {
        let photo: CameraCapturedPicture = await cameraRef.takePictureAsync();
        console.log(photo);
        navigation.navigate('happy', { photo: photo });
      }
    }

    if (!permission) {
      // Camera permissions are still loading.
      return <View />;
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
      <View style={{ flex: 1}}>
        <CameraView style={{flex: 2/3}} facing={facing} ref={(ref) => setCameraRef(ref)}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
              <Text style={styles.buttonText}>Flip Camera</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
        <Button title="Take Photo" onPress={takePhoto} />
        <Button title="Choose from Gallery" onPress={takePhoto} />
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
