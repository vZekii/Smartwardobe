import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import SmartwardrobeLogo from '../assets/images/SmartwardobeLogo.png';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'black' }}>
      <View style={{ alignItems: 'center', marginTop: 100 }}>
        <Image source={SmartwardrobeLogo} style={{ width: 400, height: 400 }} />
        <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold' }}>Smartwardrobe!</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>Your personal fashion stylist</Text>
      </View>
      <TouchableOpacity
        style={{ marginBottom: 50, backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
        onPress={() => navigation.navigate('profile')} // Change 'NextPage' to your actual next screen name
      >
        <Text style={{ color: 'white', fontSize: 18 }}>BEGIN</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
