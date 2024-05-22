import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import SmartwardrobeLogo from '../assets/images/SmartwardobeLogo.png';
import { router } from 'expo-router';
import CustomButton from '@/components/CustomButton';

export default function App() {

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <View style={{ alignItems: 'center', marginTop: 100 }}>
        <Image source={SmartwardrobeLogo} style={{ width: 400, height: 400 }} />
        <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold' }}>Smartwardrobe!</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>Your personal fashion stylist</Text>
        <CustomButton 
          title="BEGIN" 
          handlePress={() => router.push('/profile')} 
          containerStyles="mt-10 px-20" 
        />
      </View>
        
      <StatusBar style="light" />
    </View>
  );
}
